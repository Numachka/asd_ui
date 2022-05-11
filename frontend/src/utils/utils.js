function camelCase(string) {
    if (string == null) {
        string = "human"
    }
    return string.substring(0, 1).toUpperCase() + string.substring(1) /* hello -> Hello */
}

function hashPassword(password) {
    return (password) //TODO need to actually add salt and hash the password.
}

export {camelCase, hashPassword}