import makeUser from '../../entities/users'

export default function makeCreateUser({ userRepository }){
    return function createUser(userInfo){

        const user = makeUser({ ...userInfo })
        console.log("Created user", user.getId())

        return userRepository.insert({
            id: user.getId(),
            username: user.getUsername(),
            password: user.getPassword(),
            firstname: user.getFirstname(),
            lastname: user.getLastname(),
            date_created: user.getDateCreated(),
            date_modified: user.getDateModified()
         })
    }
}