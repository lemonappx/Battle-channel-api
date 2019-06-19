
export default function makeFindAllUsers({ userRepository }){
    return function findAllUsers(){
        const users = userRepository.findAll()
        return users
    }
}