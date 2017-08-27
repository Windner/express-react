var express = require('express');
var path = require('path')
var bodyParser = require('body-parser')
const app = express();
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
app.use('/', express.static('public'));
app.get('*', function (request, response){
    response.sendFile(path.resolve(__dirname, 'public', 'index.html'));
})

app.listen(process.env.PORT || 3000);
exports.app = app;