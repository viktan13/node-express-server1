import bodyParser from 'body-parser';

export default function parseResponse(app) {
  app.use(bodyParser.urlencoded({ extended: false }));

  // parse application/json
  app.use(bodyParser.json());
}
