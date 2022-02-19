const express = require('express');
const serverEndpoint = new EndPoints("localhost", 3000, "", "");
const databaseEndpoint = new EndPoints("localhost", 1000, "", ""); //TODO create local db for testing.
const applicationEndpoint = new EndPoints("localhost", 8080, "", "");

const app = express();
app.set('views', 'views')
app.use(express.static('public'));

app.get('/', function (req, res) {
    res.sendFile('index.html');
});

app.listen(serverEndpoint.port, serverEndpoint.host);

