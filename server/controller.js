module.exports = {
  registerNewUser: (req, res, next) => {
    let db = req.app.get("db");
    //console.log("register" + req.body);
    console.log("register: " + JSON.stringify(req.body));
    const { username, password, profile_pic } = req.body;
    console.log(username, password, profile_pic);

    db.registerUser([username, password, profile_pic])
      .then(users => {
        db.getUsers().then(users => {
          return res
            .status(200)
            .send(users.find(user => user.username === username));
        });
      })
      .catch(err => {
        res.status(500).send({
          errorMessage: "error!"
        });
        console.log(err);
      });
  },

  loginUser: (req, res, next) => {
    console.log("req.params: " + req.params.username);
    console.log("req.params: " + req.params.password);
    // console.log("login: " + JSON.stringify(req.body));
    // console.log("login: " + JSON.stringify(res.data));
    let db = req.app.get("db");

    const { username, password } = req.params;
    console.log(username, password);

    db.getUsers()
      .then(users => {
        return res
          .status(200)
          .send(
            users.find(
              user => user.username === username && user.password === password
            )
          );
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
