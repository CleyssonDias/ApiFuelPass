import { User } from "../entities/User"

type ITokenData = {
  id: number,
  pass: string,
  time: string
}

type INewPass = {
  email: string,
  password: string
}

export interface IUserRepository {
  findByEmail(email: string): Promise<User>
  findByUser(id: number): Promise<User>
  save(user: User): Promise<User>
  encryptpass(password: string): Promise<string>
  generateToken(data: ITokenData): Promise<string>
  verifyPass(pass: string, passU:string): Promise<any>
  recoveyPass(email: string, pass: string): Promise<INewPass>
<<<<<<< HEAD
  createCod(email: string,litros: number): Promise<any>
  DeleteCod(email:string ,id: any): Promise<any>
=======
>>>>>>> parent of 81a8156 (Two :+1:)
}