import { BcryptAdapter, envs, JwtAdapter } from "../../config";
import { CustomError, LoginUserDto, RegisterUserDto, UserEntity } from "../../domain";
import { User } from "../../data";
import { EmailService } from './email.service';

/**
 * Si se quise cambiar de base de datos es solo aqui en los servicios donde se hace los cambios
 * o implementar el patron repositorio
 * Aqui se implementan los queries de Sequelize u otras bases de datos
 */


export class AuthService {

  // Dependency injection ?
  constructor(

    public readonly emailService: EmailService
  ) { }

  public async registerUser(registerUserDto: RegisterUserDto) {

    const existsUser = await User.findOne({ where: { email: registerUserDto.email } });
    if (existsUser) throw CustomError.badRequest('Email already exists');

    try {
      // create user
      const user = await User.create(registerUserDto);
      console.log("🚀 ~ AuthService ~ registerUser ~ user:", user)

      // hash password
      user.password = BcryptAdapter.hash(registerUserDto.password);

      // save user in database
      await user.save();

      // send email confirmation to user whit a token and a confirmation link
      await this.sendEmailValidationLink(user.email)


      // return user to frontend
      const { emailValidated, password, id, ...userEntity } = UserEntity.fromObject(user);

      // create JWT token
      const token = await JwtAdapter.generateToken({ id: user.id });
      if (!token) throw CustomError.internalServer('Error creating token');


      return {
        message: 'User created successfully',
        user: { ...userEntity },
        token
      };

    } catch (error) {
      throw CustomError.internalServer(`${error}`);
    }
  }


  public async loginUser(loginUserDto: LoginUserDto) {

    // check if user exists
    const user = await User.findOne({ where: { email: loginUserDto.email } });
    if (!user) throw CustomError.badRequest('Email does not exist'); // should be: Email and Password do not match

    // check if password is correct
    const isPasswordCorrect = BcryptAdapter.compare(loginUserDto.password, user.password);
    if (!isPasswordCorrect) throw CustomError.badRequest('Password is incorrect'); // should be: Email and Password do not match

    // return user
    const { password, id, emailValidated, ...userEntity } = UserEntity.fromObject(user);

    const token = await JwtAdapter.generateToken({ id: user.id });
    if (!token) throw CustomError.internalServer('Could not generate token');

    return {
      message: 'Login successful',
      user: { ...userEntity },
      token: token
    };
  }

  public async validateEmail(token: string) {

    const payload = await JwtAdapter.validateToken(token);
    if(!payload) throw CustomError.badRequest('Invalid tokenNN');

    const { email } = payload as { email: string }; // como el payload es any, se puede poner que tambien es un objeto con un email tipo string
    if(!email) throw CustomError.internalServer('The token does not contain an email');

    const user = await User.findOne({ where: { email } });
    if(!user) throw CustomError.internalServer('User not found');

    // validate email and save in database
    user.emailValidated = true;
    await user.save();

    return true;
  }

  private sendEmailValidationLink = async (email: string) => {

    const token = await JwtAdapter.generateToken({ email });
    if (!token) throw CustomError.internalServer('Could not generate token');

    const link = `${envs.WEBSERVICE_URL}/auth/validate-email/${token}`;
    const html = `
      <h1>Welcome to Hiperenlace</h1>
      <p>Please click on the following link to validate your account:</p>
      <a href="${link}"> Validate your account ${email}</a>
    `;

    const options = {
      to: email,
      subject: 'Validate your account - email confirmation',
      htmlBody: html
    };

    const isSent = await this.emailService.sendEmail(options);
    if (!isSent) throw CustomError.internalServer('Could not send email');

    return true;
  }


} 