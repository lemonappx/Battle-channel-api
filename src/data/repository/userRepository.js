export default function makeUserRepository(){

    let fakeUsers = []

    return Object.freeze({
        findAll,
        insert
    })

    function findAll(){
        return fakeUsers.map(({_id: id, ...user}) => ({
            id,
            ...user
        }))
    }

    function insert({ ...userInfo }){
        fakeUsers.push(userInfo)
        return { id: fakeUsers.indexOf(userInfo), message: "Added new User" }
    }

}