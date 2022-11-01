import { Request, Response } from "express";
import { CreateCod } from "./CreateCod";

export class CreateCodController {
  constructor(
    private createCod: CreateCod
  ) {}

  async handle(req: Request, res: Response ) {
    const { email, litros } = req.body
  
    try {
      if(!email || !litros) throw new Error("API is missing argument")
      
      const cod = await this.createCod.execute({email, litros})

      return res.status(201).json({cod})
    } catch (error) {
      return res.json({
        error: error.message || "Unexpected error."
      })
    }
  }
}

