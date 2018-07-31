module.exports = {
  registerNewUser: (req, res, next) => {
    let db = req.app.get("db");
    const { username, password } = req.body;

    db.registerUser([username, password])
      .then(users => {
        db.getUsers().then(users => {
          return res.status(200).send(users);
        });
      })
      .catch(err => {
        res.status(500).send({
          errorMessage: "error!"
        });
        console.log(err);
      });
  },

  getUsers: (req, res, next) => {
    let db = req.app.get("db");

    db.getUsers().then(users => {
      return res.status(200).send(users);
    });
  }
};
