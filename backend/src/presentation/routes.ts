import { Router } from 'express';
import { AuthRoutes } from './auth/routes';




export class AppRoutes {


  static get routes(): Router {

    const router = Router();
    
    // Rutas de autenticación de los usuarios
    router.use('/api/auth', AuthRoutes.routes);

    



    return router;
  }


}

