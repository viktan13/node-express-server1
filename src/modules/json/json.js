export default function json(req, res) {
  res.status(200).json({
    name: 'Bobby',
    age: 25,
    components: ['abd', 'jgh', 'ssn', 'thrue'],
    status: 'OK',
  });
}
