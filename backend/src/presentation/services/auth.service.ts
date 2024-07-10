import { bcryptAdapter, jwtAdapter } from "../../config";
import { CustomError, LoginUserDto, RegisterUserDto, UserEntity } from "../../domain";
import { User } from "../../data";

/**
 * si se quise cambiar de base de datos es solo aqui en los servicios donde se haceb los cambios
 * o implementar el patron repositorio
 */

// aqui implementar los queris de ssequelize

export class AuthService {

  // Dependency injection ?
  constructor() { }

  public async registerUser(registerUserDto: RegisterUserDto) {

    const existsUser = await User.findOne({ 
      where: { email: registerUserDto.email }
    });
    if (existsUser) throw CustomError.badRequest('Email already exists');

    try {
      // create user
      const user  = await User.create(registerUserDto);
      console.log("🚀 ~ AuthService ~ registerUser ~ user:", user)

      // hash password
      user.password = bcryptAdapter.hash(registerUserDto.password);

      // save user in database
      await user.save();

      // create JWT token

      // email confirmation


      const { emailValidated, password, ...userEntity } = UserEntity.fromObject(user);



      return { user: { ...userEntity }, token: 'JWT token' };

    } catch (error) {
      throw CustomError.internalServer(`${error}`);
    }

  }


  // public async loginUser(loginUserDto: LoginUserDto) {

  //   // check if user exists

  //   const user = await User.findOne({ email: loginUserDto.email });
  //   if (!user) throw CustomError.badRequest('Email does not exist'); // should be: Email and Password do not match

  //   // check if password is correct
  //   const isPasswordCorrect = bcryptAdapter.compare(loginUserDto.password, user.password);
  //   if (!isPasswordCorrect) throw CustomError.badRequest('Password is incorrect'); // should be: Email and Password do not match


  //   // return user
  //   const { password, ...userEntity } = UserEntity.fromObject(user);

  //   const token = await jwtAdapter.generateToken({ id: user.id });
  //   if (!token) throw CustomError.internalServer('Could not generate token');

  //   return {
  //     user: { ...userEntity },
  //     token: token
  //   };

  // }
} 