import http from 'http';
import appConfig from '../config';
import app from '../app';

const server = http.createServer(app);
server.listen(appConfig.port);
