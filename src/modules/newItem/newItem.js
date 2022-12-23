export default function newItem(req, res) {
  const a = req.body.a;
  const b = req.body.b;
  const sum = a + b;
  res.send('Add Smth NEW here!!! ' + sum);
}
