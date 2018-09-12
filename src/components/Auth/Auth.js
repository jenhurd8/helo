import React, { Component } from "react";
import axios from "axios";
import "./Auth.css";
import { connect } from "react-redux";
import { user } from "../../ducks/reducer";

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
    console.log(this.props);
    axios
      .post(`http://localhost:3001/api/registerNewUser`, {
        username: this.state.username,
        password: this.state.password,
        profile_pic: "https://robohash.org/" + this.state.username
      })
      .then(response => {
        console.log(response.data);
        //this.props.user([response.data.username, response.data.profile_pic]);
        this.props.user(response.data.username);
        this.props.history.push("/dashboard");
      });
  }

  loginUser(username, password) {
    axios
      .get(`http://localhost:3001/api/loginUser/${username}/${password}`)
      .then(response => {
        console.log(response);
        if (
          response.data.username === username &&
          response.data.password === password
        ) {
          // console.log("login success");
          //console.log(this.props);
          this.props.user(username);
          this.props.history.push("/dashboard");
        } else {
          console.log("wrong password");
          this.props.history.push("/");
        }
      });
  }

  render() {
    // console.log(this.props);
    return (
      <div className="back">
        <div className="login">
          <div className="smiley">
            <div>
              <div id="leftEye" />
              <div id="rightEye" />
            </div>

            <div id="mouth" />
          </div>
          <h1>Helo</h1>
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

export default connect(
  null,
  { user }
)(Auth);
