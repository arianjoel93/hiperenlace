import { CustomError } from "../errors/custom.error";

interface GenericObject {
  [key: string]: any
}

export class ProductEntity {
  constructor(
    public id: string,
    public name: string,
    public description: string,
    public category_id: string,
    public img_url: string,
    public price: number,
    public availability: boolean,
    public cart_id?: string,
  ) { }

  static fromObject(object: GenericObject) {

    const { id, name, description, category_id, cart_id, img_url, price, availability } = object;

    if (!id) throw CustomError.badRequest('Missing id');
    if (!name) throw CustomError.badRequest('Missing name');
    if (!description) throw CustomError.badRequest('Missing description');
    // if (!category_id) throw CustomError.badRequest('Missing category_id');
    // if (!cart_id) throw CustomError.badRequest('Missing cart_id');
    // if (!img_url) throw CustomError.badRequest('Missing img_url');
    if (!price) throw CustomError.badRequest('Missing price');
    // if (!availability) throw CustomError.badRequest('Missing availability');



    return new ProductEntity(
      id,
      name,
      description,
      category_id,
      cart_id,
      img_url,
      price,
      availability
    )
  }
}