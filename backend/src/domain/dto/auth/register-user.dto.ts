import { regularExps } from "../../../config";


interface GenericObject {
  [key: string]: any
}

/**
 * generally used in controllers and services to validate incoming data from the client(request body)
 */

export class RegisterUserDto {

  private constructor(
    public readonly name: string,
    public readonly email: string,
    public readonly password: string,
    public readonly phone?: string
  ) { }

  public static create(object: GenericObject): [string?, RegisterUserDto?] {

    const { name, email, password, phone } = object;
    if (!name) return ['Missing name'];
    if (!email) return ['Missing email'];
    if (regularExps.email.test(email) === false) return ['Invalid email'];
    if (!password) return ['Missing password'];
    if (password.length < 6) return ['Password must be at least 6 characters'];


    return [undefined, new RegisterUserDto(name, email, password, phone)];
  }

}

