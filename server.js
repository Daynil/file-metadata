'use strict';
var express = require('express');
var path = require('path');
var morgan = require('morgan');
var app = express();
app.use(morgan('dev'));
var pathname = path.join(process.cwd());
app.use(express.static(pathname));
var port = process.env.PORT || 3000;
app.listen(port, function () { return console.log('Listening on port ' + port + '...'); });
//# sourceMappingURL=server.js.map