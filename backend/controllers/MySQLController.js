class MySQLController {
    constructor(databaseEndpoint) {
        this._mysql = require('mysql');
        this._host = databaseEndpoint.host;
        this._port = databaseEndpoint.port;
        this._user = databaseEndpoint.user;
        this._password = databaseEndpoint.password;
        this._database = databaseEndpoint.database;
        this._queries = require('./Queries');
    }

    get mysql() {
        return this._mysql;
    }

    get host() {
        return this._host;
    }

    set host(value) {
        this._host = value;
    }

    get user() {
        return this._user;
    }

    set user(value) {
        this._user = value;
    }

    get password() {
        return this._password;
    }

    set password(value) {
        this._password = value;
    }

    get database() {
        return this._database;
    }

    set database(value) {
        this._database = value;
    }

    get port() {
        return this._port;
    }

    set port(value) {
        this._port = value;
    }

    get queries() {
        return this._queries;
    }

    createConnection() {
        return this.mysql.createConnection({
            host : this.host,
            port : this.port,
            user : this.user,
            password : this.password,
            database : this.database
        });
    }

    getUsers() { //TODO example function for a query to the database.
        const connection = this.createConnection();
        const that = this;
        connection.connect(function (err) {
            if (err) throw err;
            connection.query(that.queries.getAUser,
                function (err, result) {
                    if (err) throw err;
                    console.log(result);
                });
        });
    }
}

module.exports = MySQLController;


