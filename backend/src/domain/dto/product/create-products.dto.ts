import { Validators } from "../../../config";

interface GenericObject {
  [key: string]: any
}


export class CreateProductsDto {

  private constructor(
    public readonly name: string,
    public readonly description: string,
    public readonly price: number,
    public readonly availability: boolean,
    public readonly image_url?: string,
    public category_id?: string,
    public cart_id?: string,
  ) { }

  static create(object: GenericObject): [string?, CreateProductsDto?] {
    const { name, description, price, availability, image_url = 'image_url', category_id = 'category_id' } = object;
    let availabilityBoolean = availability;

    if (!name) return ['Missing name of the product.'];

    // TODO: ESTAS COMPROBACIONES DOS COMPROBACIONES ACTIVARLAS PARA CUANDO EL ADMIN CREE EL PRODUCTO
    // if (!cart_id) return ['Missing cart_id of the product.'];
    // if(!Validators.isValidUUID(cart_id)) return ['Invalid uuid of the cart.'];
    
    
    // TODO: ESTAS COMPROBACIONES DOS COMPROBACIONES ACTIVARLAS PARA CUANDO EL ADMIN CREE EL PRODUCTO
    // if (!category_id) return ['Missing category_id of the product.'];
    // if(!Validators.isValidUUID(cart_id)) return ['Invalid uuid of the category.'];

    if (!description) return ['Missing description of the product.'];
    // if (!image_url) return ['Missing image_url of the product.'];
    if (!price) return ['Missing price of the product.'];
    // if (!availability) return ['Missing availability of the product.'];
    if (typeof availability !== 'boolean') {
      availabilityBoolean = (availability === 'true') ? true : false;
    }




    return [undefined, new CreateProductsDto(name, description,price,availabilityBoolean, image_url, category_id)];
  }
}