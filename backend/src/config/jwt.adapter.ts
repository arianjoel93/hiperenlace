import jwt from 'jsonwebtoken';
import { envs } from './envs';

const JWT_SEED = envs.JWT_SEED;

export class JwtAdapter {

  static async generateToken(payload: any, expiresIn: string = '3h') {

    return new Promise((resolve) => {

      // this line below will create a token
      jwt.sign(payload, JWT_SEED, { expiresIn }, (err, token) => {
        if (err) resolve(null)

        resolve(token)
      });

    })
  }

  static async validateToken(token: string) {

    return new Promise((resolve) => {

      jwt.verify(token, JWT_SEED, (err, decoded) => {
        if (err) resolve(null)  // invalid token  

        resolve(decoded)
      })
    }
    )
  }
}