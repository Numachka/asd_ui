module.exports = class EndPoint {
    constructor(host, port, username, password) {
        this._host = host;
        this._port = port;
        this._username = username;
        this._password = password;
    }

    get host() {
        return this._host;
    }

    set host(value) {
        this._host = value;
    }

    get port() {
        return this._port;
    }

    set port(value) {
        this._port = value;
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

    getRequest(method, path, payload) {
        fetch(this.host + this.port + path)
            .then(response => response.json())
            .then(data => console.log(data));
    }
};