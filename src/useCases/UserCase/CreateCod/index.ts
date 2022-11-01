
import { userRopsitory } from "../../../repositories/implementations/UserRepository";
import { CreateCod } from "./CreateCod";
import { CreateCodController } from "./CreateUserCrontroller";

const createCod = new CreateCod(userRopsitory)
const createCodController = new CreateCodController(createUser)

export { createCod, createCodController }