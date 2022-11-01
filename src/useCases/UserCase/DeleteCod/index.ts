
import { userRopsitory } from "../../../repositories/implementations/UserRepository";
import { DeleteCod } from "./DeleteCod";
import { DeleteCodController } from "./DeleteCodCrontroller";

const deleteCod = new DeleteCod(userRopsitory)
const deleteCodController = new DeleteCodController(deleteCod)

export { deleteCod , deleteCodController }