import crypto from 'crypto-js'

module.exports = function makeHash(message){
    return crypto.SHA256(message).toString()
}