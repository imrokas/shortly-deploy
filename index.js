var app = require('./server.js');

 var port = process.env.PORT || 4568;

 app.listen(port, function() {
   console.log('Server now listening on port ', port);
 });
 //set default PORT to Heroku designated port or 3000, if Heroku or other servers don't give this.

