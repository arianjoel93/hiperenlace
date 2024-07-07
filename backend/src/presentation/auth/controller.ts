import { Request, Response } from "express";
import { CustomError, LoginUserDto, RegisterUserDto } from "../../domain";
import { AuthService } from "../services/auth.service";

/**
 * El controlador lo unico que hace es relegar al servicio la tarea de crear e 
 * interactuar con la base de datos
 * Lo hace inyectando una instancia del servicio
 */

export class AuthController {

  // Dependency injection
  constructor(
    public readonly authService: AuthService
  ) { }

  private handleError(error: any, res: Response) {

    if(error instanceof CustomError) {
      return res.status(error.statusCode).json({ error: error.message });
    }
    console.log("🚀 ~ AuthController ~ handleError ~ error:", `${error}`)

    return res.status(500).json({ error: 'Internal server error from controller' });

}


  registerUser = (req: Request, res: Response) => {
    const [error, registerDto] = RegisterUserDto.create(req.body);
    if(error) return res.status(400).json({ error });

    this.authService.registerUser(registerDto!)
      .then(result => res.json( result ))
      .catch(error => this.handleError(error, res));

    
  }
  loginUser = (req: Request, res: Response) => {
    const [error, loginUserDto] = LoginUserDto.create(req.body);
    if(error) return res.status(400).json({ error });

    this.authService.loginUser(loginUserDto!)
      .then(result => res.json( result ))
      .catch(error => this.handleError(error, res));
  }
  
  // validateEmail = (req: Request, res: Response) => {
  //   const [error, loginUserDto] = ValidateEmailDto.create(req.body);
  //   if(error) return res.status(400).json({ error });

  //   this.authService.loginUser(loginUserDto!)
  //     .then(result => res.json( result ))
  //     .catch(error => this.handleError(error, res));
  // }

  //   res.json({ message: 'validateEmail' })
  // }
}