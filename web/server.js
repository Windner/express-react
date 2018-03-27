var express = require('express');
var path = require('path')
var bodyParser = require('body-parser')
var expressWinston = require('express-winston');
var winston = require('winston'); // for transports.Console

const app = express();
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
app.use('/', express.static('public'));
app.use(expressWinston.logger({
      transports: [
        new winston.transports.Console({
          json: true,
          colorize: true
        })
      ],
      meta: true, // optional: control whether you want to log the meta data about the request (default to true)
      msg: "HTTP {{req.method}} {{req.url}}", // optional: customize the default logging message. E.g. "{{res.statusCode}} {{req.method}} {{res.responseTime}}ms {{req.url}}"
      expressFormat: true, // Use the default Express/morgan request formatting. Enabling this will override any msg if true. Will only output colors with colorize set to true
      colorize: false, // Color the text and status code, using the Express/morgan color palette (text: gray, status: default green, 3XX cyan, 4XX yellow, 5XX red).
      ignoreRoute: function (req, res) { return false; }, // optional: allows to skip some log messages based on request and/or response
      dynamicMeta: function(req, res) { return [Object]; } // Extract additional meta data from request or response (typically req.user data if using passport). meta must be true for this function to be activated
    }));

app.get('*', function (request, response){
    response.sendFile(path.resolve(__dirname, 'public', 'index.html'));
})


app.listen(process.env.PORT || 3000);
exports.app = app;