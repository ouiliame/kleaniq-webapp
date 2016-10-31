// mongodb database
import './db';
import express from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import compression from 'compression';

const app = express();
import { backendPort } from '../config';

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(compression());
app.use(express.static('public/'));

app.use('/api', require('./api'));

app.listen(backendPort, '0.0.0.0', (err, result) => {
  if (err) {
    return console.log(err);
  }

  console.log('Listening at http://0.0.0.0:' + backendPort);
});
