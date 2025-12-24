import fs from 'fs';
import https from 'https';
import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.send('Hello, HTTPS world!');
});

https.createServer({
  key: fs.readFileSync('./key/key.pem'),
  cert: fs.readFileSync('./cert/cert.pem')
}, app).listen(3000);