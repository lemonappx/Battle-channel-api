
export default function makeCreateUserController({ createUser }){
    return async function createUserController(request){
        try {

            const { ...userInfo } = request.body

            const created = createUser({
                ...userInfo
            })

            // TODO: create a much better operator
            return {
                headers: {
                    'Content-type': 'application/json'
                },
                statusCode: 200,
                body: { id: created.id, message: created.message }
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