import User from './Model';

export default function userUpdateById(req, res) {
  const userID = req.params.userID;

  delete req.body.password;

  User.updateOne({ _id: userID }, req.body)
    .exec()
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json('Update was not done');
    });
}
