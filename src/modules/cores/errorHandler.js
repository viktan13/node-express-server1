function apiNotFound(req, res) {
  res.status(404).send('API Not Found');
}

export default function errorHandler(app) {
  app.use(apiNotFound);
}
