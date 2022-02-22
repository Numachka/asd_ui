class ApplicationController {
    constructor(applicationEndpoint) {
        this._host = applicationEndpoint.host;
        this._port = applicationEndpoint.port;
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

}

module.exports = ApplicationController;


