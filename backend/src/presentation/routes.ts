import { Router } from 'express';
import { AuthRoutes } from './auth/routes';
import { Category } from '../data/mysql/models/category';
import { CategoryRoutes } from './category/routes';
import { ProductRoutes } from './product/routes';




export class AppRoutes {


  static get routes(): Router {

    const router = Router();
    
    // Rutas de autenticación de los usuarios
    // TODO: Implementar validaciones de rutas donde solo un admin pueda crear categorias
    // COMO LA DE INMUNOSALUD
    router.use('/api/auth', AuthRoutes.routes);

    router.use('/api/categories', CategoryRoutes.routes);
    
    router.use('/api/products', ProductRoutes.routes);
    
    // router.use('/api/cart', CartRoutes.routes);



    return router;
  }


}

