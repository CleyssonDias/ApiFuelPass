import { User } from "../../../entities/User";
import { IUserRepository } from "../../../repositories/IUserRepository";
import { ICreateCodDTO } from "./ICreateCodDTO";

export class CreateCod {
  constructor(
    public userRepository: IUserRepository
  ) {}

  async execute(data: ICreateCodDTO) {
    const cods = await this.userRepository.createCod(data.email, data.litros)

    return cods
  }
}