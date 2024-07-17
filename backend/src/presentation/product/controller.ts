import { Request, Response } from "express";
import { CreateProductsDto, CustomError, PaginationDto } from "../../domain";
import { ProductService } from "../services";

/**
 * El controlador lo unico que hace es relegar y llamar al servicio la tarea de crear e 
 * interactuar con la base de datos
 * Lo hace inyectando una instancia del servicio
 */

export class ProductController {

  // Dependency injection
  constructor(
    public readonly productService: ProductService
  ) { }


  private handleError(error: any, res: Response) {

    if (error instanceof CustomError) {
      return res.status(error.statusCode).json({ error: error.message });
    }
    console.log("🚀 ~ AuthController ~ handleError ~ error:", `${error}`)
    return res.status(500).json({ error: 'Internal server error from controller' });
  }

  createProducts = async (req: Request, res: Response) => {
    const [error, createProductsDto] = CreateProductsDto.create(req.body);
    if (error) return res.status(400).json({ error });

    this.productService.createProduct(createProductsDto!)
      .then(product => res.json(product))
      .catch(error => this.handleError(error, res));
  }

  getProducts = async (req: Request, res: Response) => {

    const { page = 1, limit = 5 } = req.query;
    const [error, paginationDto] = PaginationDto.create(Number(page), Number(limit));
    if (error) return res.status(400).json({ error });

    // res.json('getting products');
    // res.json({ paginationDto })

    await this.productService.getProducts(paginationDto!)
      .then(result => res.json(result))
      .catch(error => this.handleError(error, res));

  }


}


