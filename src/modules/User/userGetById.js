import User from './Model';

export default function userGetById(req, res) {
  const userID = req.params.userID;

  User.findById(userID)
    .exec()
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json('Didnt find anything');
    });
}
