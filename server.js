/**
 * Libraries
 **/
var http = require('http');
var path = require('path');
var express = require('express');

/**
 * Initializes libraries for use
 **/
var app = express();
var server = http.createServer(app);

//All requests to files in '/public' are handled by this middleware
app.use(express.static(path.resolve(__dirname, 'public')));

//A middleware function for sending the secret message
var secretMessage = function(request, response, next) {
  var message = "This is a secret message";
  response.send(message); //Sends a string to the client (AKA: browser)
}

//A middleware function for sending the super secret message
var superSecretMessage = function(request, response, next) {
  var message = "This is a super secret message";
  response.send(message); //Sends a string to the client (AKA: browser)
}

app.use('/secret', secretMessage);
app.get('/supersecret', superSecretMessage);

server.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0", function(){
  var addr = server.address();
  console.log("Tutorial server listening at", addr.address + ":" + addr.port);
});
