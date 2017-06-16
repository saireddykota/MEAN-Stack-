'use strict';

///// Merge from Login module - Start
//require('rootpath')();
//var express = require('express');
//var appe = express();
var cors = require('cors');
var bodyParser = require('body-parser');
//var expressJwt = require('express-jwt');
//var config = require('config.json');
//var date = require('date-and-time');//for date

//// Merge from Login module - END
var loopback = require('loopback');
var boot = require('loopback-boot');

var app = module.exports = loopback();


app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//app.use('/users', require('./controllers/users.controller'));


app.start = function() {
  // start the web server
  return app.listen(function() {
    app.emit('started');
    var baseUrl = app.get('url').replace(/\/$/, '');
    console.log('Web server listening at: %s', baseUrl);
    if (app.get('loopback-component-explorer')) {
      var explorerPath = app.get('loopback-component-explorer').mountPath;
      console.log('Browse your REST API at %s%s', baseUrl, explorerPath);
    }
  });
};

// Bootstrap the application, configure models, datasources and middleware.
// Sub-apps like REST API are mounted via boot scripts.
boot(app, __dirname, function(err) {
  if (err) throw err;

  // start the server if `$ node server.js`
  if (require.main === module)
    app.start();
});
