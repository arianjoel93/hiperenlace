import { CustomError } from "../errors/custom.error";

interface GenericObject {
  [key: string]: any
}

export class UserEntity {
  constructor(
    public id: string,
    public name: string,
    public email: string,
    public emailValidated: Boolean,
    public password: string,
    public role?: string[],
    public phone?: number,
    public img?: string,
  ) { }


  public static fromObject(object: GenericObject) {

    const { id, name, email, emailValidated, password, role, img } = object;

    if (!id) throw CustomError.badRequest('Missing id');
    if (!name) throw CustomError.badRequest('Missing name');
    if (!email) throw CustomError.badRequest('Missing email');
    if (emailValidated === undefined) throw CustomError.badRequest('Missing emailValidated');
    if (!password) throw CustomError.badRequest('Missing password');
    if (!role) throw CustomError.badRequest('Missing role');

    return new UserEntity(id, name, email, emailValidated, password, role, img);
  }
}