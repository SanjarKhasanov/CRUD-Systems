import express from 'express';
import api from './routes/api.routes';

const server = express();

server.use(express.json());
server.use(express.urlencoded({ extended: true }));

server.use(api);

const port: number = 8080;
server.listen(port, () => console.log(`Server ishga tushdi ${port}`));