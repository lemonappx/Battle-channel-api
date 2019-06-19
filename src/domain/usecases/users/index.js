import { userRepository } from '../../../data/repository';
import makeFindAllUsers from './findAllUsers';
import makeCreateUser from './createUser'

const createUser = makeCreateUser({ userRepository })
const findAllUsers = makeFindAllUsers({ userRepository })

export { createUser, findAllUsers }