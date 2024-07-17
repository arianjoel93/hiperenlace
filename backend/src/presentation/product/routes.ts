import { Router } from 'express';
import { AuthMiddleware } from '../middlewares/auth.middleware';
import { ProductController } from './controller';
import { ProductService } from '../services';



// TODO: Implementar validaciones de rutas donde solo un admin pueda crear categorias


export class ProductRoutes {


  static get routes(): Router {

    const router = Router();
    const productService = new ProductService();
    const controller = new ProductController(productService);

    router.get('/get', controller.getProducts);
    router.post('/create', [AuthMiddleware.validateJWT], controller.createProducts);

    return router;
  }

}

