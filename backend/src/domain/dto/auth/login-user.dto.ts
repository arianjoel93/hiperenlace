import { regularExps } from "../../../config";

interface GenericObject {
  [key: string]: any
}

export class LoginUserDto {

  private constructor (
    public readonly email: string,
    public readonly password: string
  ) {}

  public static create (object: GenericObject): [string?, LoginUserDto?] {

    const { email, password } = object;
    if(!email) return ['Missing email.'];
    if (regularExps.email.test(email) === false) return ['Invalid email'];
    if(!password) return ['Missing password.'];
    if (password.length < 6) return ['Password must be at least 6 characters'];

    return [undefined, new LoginUserDto(email, password)];


  }
}