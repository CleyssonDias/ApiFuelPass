import { Request, Response } from "express";
import { DeleteCod } from "./DeleteCod";

export class DeleteCodController {
  constructor(
    private createCod: DeleteCod
  ) {}

  async handle(req: Request, res: Response ) {
    const { email, id } = req.body
  
    try {
      if(!email || !id) throw new Error("API is missing argument")
      
      const cod = await this.createCod.execute({email,id})

      return res.status(201).json({cod})
    } catch (error) {
      return res.json({
        error: error.message || "Unexpected error."
      })
    }
  }
}

