/*
 * @Author: Andres Leal 
 * @Date: 2019-02-12 17:45:30 
 * @Last Modified by: Andres Leal
 * @Last Modified time: 2019-02-15 13:53:46
 */

let userSchemas = {};

userSchemas.signup = {
    "$schema": "http://json-schema.org/draft-07/schema#",
    "title": "Sign up",
    "description": "Sign up Schema",
    "type": "object",
    "properties": {
        "userName": {
            "type": "string",
            "minLength": 1
        },
        "password": {
            "type": "string",
            "minLength": 6
        },
        "name": {
            "type": "string",
            "minLength": 1
        },
        "lastName": {
            "type": "string",
            "minLength": 1
        },
        "birthDate": {
            "type": "string",
            "format": "date-time"
        },
        "email": {
            "type": "string",
            "format": "email"
        },
        "rol": {
            "type": "string",
            "minLength": 1
        }
    },
    "required": ["userName", "password", "name", "lastName", "birthDate", "email", "rol"],
    "additionalProperties": false
}


module.exports = userSchemas;