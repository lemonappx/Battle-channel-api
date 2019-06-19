
export default function makeFindAllUsersController({ findAllUsers }){
    return async function findAllUsersController(request){
        try {

            const users = findAllUsers()

            // TODO: create a much better operator
            return {
                headers: {
                    'Content-type': 'application/json'
                },
                statusCode: 200,
                body: users
            }

        } catch(e) {

            // TODO: user other logger libs
            console.log(e)

            // TODO: create a much better operator
            return {
                headers: {
                    'Content-type': 'application/json'
                },
                statusCode: 400,
                body:{
                    error: e.message
                }
            }
        }
    }
}