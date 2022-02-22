'use strict';

const https = require('https');
const MySQLController = require("./controllers/MySQLController.js");
const ApplicationController = require("./controllers/MySQLController.js");
const User = require("./models/User");
const UserInterface = require("./models/UserInterface");
const endpoints = require("./controllers/EndPoint.js");

const database = new MySQLController(endpoints.databaseEndpoint);
const app = new ApplicationController(endpoints.applicationEndpoint);

const server = https.createServer();

// server.listen(endpoints.serverEndpoint.port, endpoints.serverEndpoint.host,
//     () => {
//         console.log(`Server running at https://${serverEndpoint.host}:${serverEndpoint.port}/`);
//     });

let userDetails = database.getUsers();
console.log(userDetails);
for (let userDetailsKey in userDetails) {
    if (userDetailsKey.username.localeCompare('doctor')) {
        console.log(`User ${userDetailsKey.username}  logged in!`);
        console.log(`User Interface: ${ userDetailsKey.userInterface }`);
    }
}