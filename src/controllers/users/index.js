import {
    createUser,
    findAllUsers
} from '../../domain/usecases/users'

import makeCreateUserController from './createUserController'
import makeFindAllUsersController from './findAllUsersController'

const createUserController = makeCreateUserController({ createUser })
const findAllUsersController = makeFindAllUsersController({ findAllUsers })

export { createUserController, findAllUsersController }