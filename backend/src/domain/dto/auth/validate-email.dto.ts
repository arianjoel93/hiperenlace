import { regularExps } from "../../../config";

interface GenericObject {
  [key: string]: any
}

export class ValidateEmailDto {
  
  private constructor(
    public readonly email: string
  ) {}

  public static create(object: GenericObject): [string?, ValidateEmailDto?] {
    const { email } = object;
    if(!email) return ["Email is required", undefined];
    if(!regularExps.email.test(email)) return ["Email is invalid", undefined];
    
    return [undefined, new ValidateEmailDto(email)];
  }

}