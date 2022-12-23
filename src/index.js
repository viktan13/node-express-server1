import express from 'express';
import errorHandler from './modules/cores/errorHandler';
import logger from './modules/cores/logger';
import parseResponse from './modules/cores/parseResponse';
import cors from './modules/cores/cors';
import routes from './modules/cores/routes';
import dbConnect from './modules/cores/db';

const app = express();
const PORT = 5000;

dbConnect();
logger(app);
parseResponse(app);
cors(app);
routes(app);
// localhost:5000/

errorHandler(app);

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
