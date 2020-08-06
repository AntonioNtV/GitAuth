import { CreateUser } from './createUser'
import { CreateUserController } from './createUserController'

const createUser = new CreateUser()
const createUserController = new CreateUserController(createUser)

export { createUser, createUserController }
