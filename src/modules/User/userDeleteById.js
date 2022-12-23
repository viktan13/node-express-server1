import User from './Model';

export default function userDeleteById(req, res) {
  const userID = req.params.userID;

  User.deleteOne({ _id: userID })
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json('User delete error');
    });
}
