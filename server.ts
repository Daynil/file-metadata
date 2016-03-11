'use strict';
import * as express from 'express';
import * as path from 'path';
import * as morgan from 'morgan';
import * as axios from 'axios';
const app: express.Express = express();

app.use(morgan('dev'));
let pathname = path.join(process.cwd());
app.use( express.static(pathname) );

let port = process.env.PORT || 3000;
app.listen(port, () => console.log('Listening on port ' + port + '...'));