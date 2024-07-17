import { Router } from 'express';
import { CategoryController } from './controller';
import { AuthMiddleware } from '../middlewares/auth.middleware';
import { CategoryService } from '../services/category.service';



// TODO: Implementar validaciones de rutas donde solo un admin pueda crear categorias


export class CategoryRoutes {


  static get routes(): Router {

    const router = Router();
    
        const categoryService = new CategoryService();
        const controller = new CategoryController(categoryService);
    
        router.get('/get', controller.getCategories);
        router.post('/create', AuthMiddleware.validateJWT, controller.createCategory);
    
    return router;
  }

}

