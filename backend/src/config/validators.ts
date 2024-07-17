import { validate as uuidValidate } from 'uuid';

export class Validators {

  static isValidUUID(id: string) {

    return uuidValidate(id);
  }
}