const express = require("express");
const bodyParser = require("body-parser");
const controller = require("./controller");
const massive = require("massive");
require("dotenv").config();

const app = express();

const port = process.env.PORT || 3001;

massive(process.env.CONNECTION_STRING)
  .then(dbInstance => {
    app.set("db", dbInstance);
  })
  .catch(err => console.log(err));

app.use(bodyParser.json());

app.post("/api/registerNewUser", controller.registerNewUser);
app.get("/api/loginUser/:username/:password", controller.loginUser);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
