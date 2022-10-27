import { Request, Response } from "express";
import { CreateCod } from "./CreateCod";

export class CreateCodController {
  constructor(
    private createCod: CreateCod
  ) {}

  async handle(req: Request, res: Response ) {
    const { email } = req.body
  
    try {
      if(!email) throw new Error("API is missing argument")
      

      return res.status(201).json({})
    } catch (error) {
      return res.json({
        error: error.message || "Unexpected error."
      })
    }
  }
}