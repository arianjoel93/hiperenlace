import { Request, Response, NextFunction } from "express";
import { JwtAdapter } from "../../config";
import { User } from "../../data";
import { UserEntity } from "../../domain";

export class AuthMiddleware {

  static async validateJWT(req: Request, res: Response, next: NextFunction) {

    const authorizationToken = req.headers.authorization;

    if (!authorizationToken) return res.status(401).json({ error: 'Unauthorized - No token provided' });
    if (!authorizationToken.startsWith('Bearer ')) return res.status(401).json({ error: 'Unauthorized - Invalid Bearer token' });
    // hasta aqui solo se comprueba que viene el token, en realidad a travez del token se tiene que averiguar que tipo de usuario es y
    // si es admin o no

    const token = authorizationToken.split(' ')[1] || '';

    try {

      // extrae el payload del token que es informacion sobre el id del usuario
      const payload = await JwtAdapter.validateToken<{ id: string }>(token);
      if (!payload) return res.status(401).json({ error: 'Unauthorized - Invalid token' });

      // extrae el usuario de la base de datos con el id que viene en el payload
      const user = await User.findOne({ where: { id: payload.id } });
      if (!user) return res.status(401).json({ error: 'Invalid token - not user found' });

      // TODO: valorar si ponerlo en el body o en los headers
      req.body.userFromToken = UserEntity.fromObject(user);
      
      next();

    } catch (error) {
      console.log(error);
      res.status(500).json({ error: 'Internal server error' });
    }

  }
}