import { User } from "../../../entities/User";
import { IUserRepository } from "../../../repositories/IUserRepository";
import { IDeleteCodDTO } from "./IDeleteCodDTO";

export class DeleteCod {
  constructor(
    public userRepository: IUserRepository
  ) {}

  async execute(data: IDeleteCodDTO) {
    const cods = await this.userRepository.DeleteCod(data.email, data.id)
    
    return cods
  }
}