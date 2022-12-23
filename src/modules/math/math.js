export default function math(req, res) {
  const a = req.body.a;
  const b = req.body.b;
  const op = req.body.operation;
  switch (op) {
    case '*':
      res.send(`${a} * ${b} = ${a * b}`);
      break;

    case '/':
      res.send(`${a} / ${b} = ${a / b}`);
      break;

    case '+':
      res.send(`${a} + ${b} = ${a + b}`);
      break;

    case '-':
      res.send(`${a} - ${b} = ${a - b}`);
      break;

    default:
      res.send(
        'Operation is not correct. Please enter the correct operator: "*, /, + or -"',
      );
  }
}
