const mysql = require('mysql');
const EndPoint = require('EndPoint')
const {createConnection} = require("mysql");

module.exports = class MySQLController {

    constructor(host, user, password, database) {
        this._host = host;
        this._user = user;
        this._password = password;
        this._database = database;
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

    createConnection() {
        return mysql.createConnection({
            host: this.host,
            user: this.user,
            password: this.password,
            database: this.database
        });
    }

    getUsers() {
        const connection = this.createConnection();
        connection.connect(function (err) {
            if (err) throw err;
            connection.query("SELECT * FROM users",
                function (err, result) {
                    if (err) throw err;
                    console.log(result);
                });
        });
    }
}



