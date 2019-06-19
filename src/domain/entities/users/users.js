export default function buildMakeUser({idUtils, makeHash}){
    return function makeUser({
        id = idUtils.makeId(),
        username,
        password,
        firstname,
        lastname,
        date_created = Date.now(),
        date_modified = Date.now()
    } = {}){

        // Validate username
        if(!username) throw new Error("Username is required")

        // Validate password
        if(!password) throw new Error("Password is required")

        // Validate firstname
        if(!firstname) throw new Error("Firstname is required")

        // Validate lastname
        if(!lastname) throw new Error("Lastname is required")

        return Object.freeze({
            getId: () => id,
            getUsername: () => username,
            getPassword: () => makeHash(password),
            getFirstname: () => firstname,
            getLastname: () => lastname,
            getDateCreated: () => date_created,
            getDateModified: () => date_modified
        })

    }
}