'use strict';
import * as express from 'express';
import * as path from 'path';
import * as morgan from 'morgan';
import * as axios from 'axios';
import * as multer from 'multer';
const app: express.Express = express();
const upload = multer();

app.use(morgan('dev'));
let pathname = path.join(process.cwd());
app.use( express.static(pathname) );

app.post('/upload', upload.single('uploadedFile'), (req, res) => {
	res.status(200).end(req.file.size.toString());
});

let port = process.env.PORT || 3000;
app.listen(port, () => console.log('Listening on port ' + port + '...'));