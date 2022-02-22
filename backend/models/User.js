class User {
    constructor(username, password, configuration) {
        this._username = username;
        this._password = password;
        this._userInterface = new UserInterface(configuration);
    }

    get username() {
        return this._username;
    }

    set username(value) {
        this._username = value;
    }

    get password() {
        return this._password;
    }

    set password(value) {
        this._password = value;
    }

    get userInterface() {
        return this._userInterface;
    }

    set userInterface(value) {
        this._userInterface = value;
    }
}

module.exports = User;