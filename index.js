const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
// This will be our application entry. We'll setup our server here.
const http = require('http');
const cors = require('cors')
// Set up the express app
const app = express();

// routers 
const AuthR = require('./Controllers/loginController')
const FlightRouter = require('./Controllers/flightsControllers')
const Bookingrouter = require('./Controllers/bookingController')

// Log requests to the console.
app.use(logger('dev'));
app.use(cors())
// Parse incoming requests data (https://github.com/expressjs/body-parser)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// Setup a default catch-all route that sends back a welcome message in JSON format.

app.use('/api/',AuthR)
app.use('/api/',FlightRouter)
app.use('/api/',Bookingrouter)

// app.use('/api',AuthR)
app.get('*', (req, res) => res.status(200).send({
    
    message: 'nothin here hahha.',

}));
const port = parseInt(process.env.PORT, 10) || 8000;
app.set('port', port);
const server = http.createServer(app);
server.listen(port);
module.exports = app;

