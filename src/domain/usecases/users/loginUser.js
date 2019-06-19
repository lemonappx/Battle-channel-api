import makeUser from '../../entities/users'

export default function makeUserLogin({usersDb }){
    return function userLogin(userInfo){
        const user = makeUser(userInfo)
        const exist = usersDb.findUserById( user.getId() )

        if(!exist) throw new Error("User does not exist!")

        return user
    }
}