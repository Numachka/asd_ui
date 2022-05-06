function camelCase(string) {
    if (string == null) {
        string = "human"
    }
    return string.substring(0, 1).toUpperCase() + string.substring(1) /* hello -> Hello */
}

export {camelCase}