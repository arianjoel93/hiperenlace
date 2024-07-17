import { Request, Response } from "express";
import { CreateCategoryDto, CustomError, PaginationDto } from "../../domain";
import { CategoryService } from "../services/category.service";

/**
 * El controlador lo unico que hace es relegar al servicio la tarea de crear e 
 * interactuar con la base de datos
 * Lo hace inyectando una instancia del servicio
 */

export class CategoryController {

  // Dependency injection
  constructor(
    public readonly categoryService: CategoryService
  ) { }


  private handleError(error: any, res: Response) {

    if (error instanceof CustomError) {
      return res.status(error.statusCode).json({ error: error.message });
    }
    console.log("🚀 ~ AuthController ~ handleError ~ error:", `${error}`)
    return res.status(500).json({ error: 'Internal server error from controller' });
  }

  createCategory = async (req: Request, res: Response) => {
    const [error, createCategoryDto] = CreateCategoryDto.create(req.body);
    if (error) return res.status(400).json({ error });

    this.categoryService.createCategory(createCategoryDto!)
      .then(category => res.json(category))
      .catch(error => this.handleError(error, res));

  }

  getCategories = async (req: Request, res: Response) => {

    const { page = 1, limit = 5 } = req.query;
    const [error, paginationDto] = PaginationDto.create(Number(page), Number(limit));

    if (error) return res.status(400).json({ error });

    // res.json(paginationDto)

    await this.categoryService.getCategories(paginationDto!)
      .then(result => res.json(result))
      .catch(error => this.handleError(error, res));

  }


}


