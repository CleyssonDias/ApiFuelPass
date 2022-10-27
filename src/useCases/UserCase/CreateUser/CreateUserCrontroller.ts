import { Request, Response } from "express";
import { CreateUser } from "./CreateUser";

export class CreateUserController {
  constructor(
    private createUser: CreateUser
  ) {}

  async handle(req: Request, res: Response ) {
    const { name, email, password } = req.body
  
    try {
      if(!name || !email || !password) throw new Error("API is missing argument")
      
      const user = await this.createUser.execute({
        name,
        email: email.toLowerCase(),
        password: password.toLowerCase(),
      })

      return res.status(201).json({user})
    } catch (error) {
      return res.json({
        error: error.message || "Unexpected error."
      })
    }
  }
}