import { Validators } from "../../../config";

interface GenericObject {
  [key: string]: any
}

/**
 * generally used in controllers and services to validate incoming data from the client(request body)
 */

export class CreateCategoryDto {

  private constructor(
    // public readonly id: string,
    public readonly name: string,
    public readonly availability: boolean,
  ) { }

  public static create(object: GenericObject): [string?, CreateCategoryDto?] {

    const { name, availability = false } = object;
    let availabilityBoolean = availability;
    // if(!Validators.isValidUUID(id)) return ['Invalid uuid'];

    if (!name) return ['Missing name'];
    if (typeof availability !== 'boolean') {
      availabilityBoolean = (availability === 'true') ? true : false;
    }


    return [undefined, new CreateCategoryDto( name, availabilityBoolean)];
  }

}

