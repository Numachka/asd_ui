'use strict';

// const https = require('https');

const EndPoint = require("./controllers/EndPoint.js");
const MySQLController = require("./controllers/MySQLController.js");

const serverEndpoint = new EndPoint("localhost", 3000, "", "");
const databaseEndpoint = new EndPoint("localhost", 3306, "", ""); //TODO create local db for testing.
const applicationEndpoint = new EndPoint("localhost", 8080, "", "");

// const server = https.createServer();
//
// server.listen(serverEndpoint.port, serverEndpoint.host, () => {
//     console.log(`Server running at https://${serverEndpoint.host}:${serverEndpoint.port}/`);
// });

const database = new MySQLController(databaseEndpoint.host, "root", "hxnhiAsdui1994%", "users")
database.getUsers();
