
import { userRopsitory } from "../../../repositories/implementations/UserRepository";
import { CreateCod } from "./CreateCod";
import { CreateCodController } from "./CreateCodCrontroller";

const createCod = new CreateCod(userRopsitory)
const createCodController = new CreateCodController(createCod)

export { createCod , createCodController }