
import { Category, Product } from "../../data";
import { CreateProductsDto, CustomError, PaginationDto, ProductEntity } from "../../domain";


// TODO: Analizar como se agregan variaciones del mismo producto
// TODO: Crear un producto por parte del ADMIN es diferente a agregar productos a un carrito
export class ProductService {

  constructor(
    // dependencies will be injected here
  ) { }

  public async createProduct(createProductDto: CreateProductsDto) {
    const existProduct = await Product.findOne({ where: { name: createProductDto.name } });
    if (existProduct) throw CustomError.badRequest('Product already exists');

    try {
      // verify if category exists
      const category = await Category.findOne({ where: { id: createProductDto.category_id } });
      if (!category) throw CustomError.badRequest('Category not found');

      createProductDto.category_id = category.id;

      const product = await Product.create(createProductDto!);
      console.log("🚀 ~ ProductService ~ createProduct ~ product:", product)



      // save product
      await product.save();

      // return product to frontend
      // const categoryEntity = CategoryEntity.fromObject(product);

      // TODO: OJO se esta mandando el producto directo desde el modelo, implementar el mappeo de entidad
      return {
        message: 'Product created successfully',
        product: product
      }
    } catch (error) {
      console.log("🚀 ~ ProductService ~ createProduct ~ error:", error)
      throw CustomError.internalServer('Error creating product');
    }
  }


  public async getProducts(paginationDto: PaginationDto) {

    const { page, limit } = paginationDto;

    try {

      // const { emailValidated, password, id, ...userEntity } = ProductEntity.fromObject(user);


      const [total, products] = await Promise.all([
        Product.count(),
        Product.findAll({  
          
          // attributes especifica los campos que queremos retornar
          attributes: ['name', 'description', 'image_url'],

          // offset y limit son las paginaciones en sequelize
          offset: (page - 1) * limit,
          limit: limit
          // TODO: populate category
        })
      ])



      return {
        total: total,
        page,
        limit,
        next: `/api/products?page=${page + 1}&limit=${limit}`,
        prev: (page - 1 > 0) ? `/api/products?page=${page - 1}&limit=${limit}` : null,
        products: products
      }

    } catch (error) {
      console.log("🚀 ~ ProductService ~ Products ~ error:", error)
      throw CustomError.internalServer('Error getting products');
    }


  }
}