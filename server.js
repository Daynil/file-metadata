'use strict';
var express = require('express');
var path = require('path');
var morgan = require('morgan');
var multer = require('multer');
var app = express();
var upload = multer();
app.use(morgan('dev'));
var pathname = path.join(process.cwd());
app.use(express.static(pathname));
app.post('/upload', upload.single('uploadedFile'), function (req, res) {
    res.status(200).end(req.file.size.toString());
});
var port = process.env.PORT || 3000;
app.listen(port, function () { return console.log('Listening on port ' + port + '...'); });
//# sourceMappingURL=server.js.map