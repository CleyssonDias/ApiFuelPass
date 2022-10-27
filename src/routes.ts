// * Importando o metodo ROUTER do express
import { Router } from "express";
import { AuthenticateVerify } from "./middlewares/AuthenticateVerify";
// ! Codigos
import { createUserController } from "./useCases/UserCase/CreateUser";
import { getUserController } from "./useCases/UserCase/GetUser";
import { recoveryPassController } from "./useCases/UserCase/RecoveryPass";

const router = Router(); // variavel com as rotas

// * ROTAS

// ? Rota de Criação de usuario
router.post('/api/v1/user', async (req, res) => {
  return await createUserController.handle(req, res)
})

// ? Rota para buscar o usuario
router.get('/api/v1/user/:email/:password', async (req, res) => {
  return await getUserController.handle(req, res)
})

// ? Rota para mudar a senha do usuario
router.put('/api/v1/user',  async (req, res) => {
  return await recoveryPassController.handle(req, res)
})


// ! Exportando as rotas para o app
export { router }