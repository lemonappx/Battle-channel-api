import user from "../../../domain/usecases/user";

export default function makeUserModel(){

    let fake

    return Object.freeze({

    })

    async function findUserByUserName(){
        return
    }

    async function insert({ userInfo }){
        return userInfo.id
    }

}