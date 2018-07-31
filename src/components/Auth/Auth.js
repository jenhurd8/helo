import React, { Component } from "react";
import axios from "axios";
import "./Auth.css";

class Auth extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: ""
    };
  }

  onChangeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  registerNewUser(username, password) {
    axios
      .post(`http://localhost:3001/api/registerNewUser`, {
        username: this.state.username,
        password: this.state.password
      })
      .then(response => {
        console.log(response.data);
      });
  }

  loginUser(username, password) {
    this.loginUser(username, password);
  }

  render() {
    return (
      <div className="back">
        <div className="login">
          <input
            name="username"
            placeholder="User Name"
            type="text"
            onChange={this.onChangeHandler}
          />
          <br />
          <br />
          <input
            name="password"
            placeholder="Password"
            type="text"
            onChange={this.onChangeHandler}
          />
          <br />
          <button
            onClick={() =>
              this.loginUser(this.state.username, this.state.password)
            }
          >
            Login
          </button>
          <button
            onClick={() =>
              this.registerNewUser(this.state.username, this.state.password)
            }
          >
            Register
          </button>
        </div>
      </div>
    );
  }
}

export default Auth;
