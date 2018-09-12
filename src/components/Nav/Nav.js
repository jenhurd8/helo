import React from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import "./Nav.css";
import { logout } from "../../ducks/reducer";

class Nav extends React.Component {
  render() {
    console.log(this.props);
    //console.log(logout);
    // console.log(this.state);
    const { location } = this.props;
    //console.log(location.pathname);
    //console.log(this.props.username);

    if (location.pathname !== "/") {
      return (
        <div className="content">
          <div className="navSide">
            <div className="userPic">
              {this.props.username}
              <br />
              <img
                src={this.props.picture}
                alt="provider"
                width="80px"
                height="80px"
              />
            </div>
            <div>
              <Link to="/">
                <button onClick={() => logout()}>Logout</button>
              </Link>
            </div>
            <div>
              <Link to="/dashboard">
                <button>Home</button>
              </Link>
            </div>
            <div>
              <Link to="/post/:postid">
                <button>New Post</button>
              </Link>
            </div>
          </div>
        </div>
      );
    }
    return null;
  }
}

function mapStateToProps(state) {
  return {
    username: state.username,
    picture: state.picture
  };
}

export default withRouter(
  connect(
    mapStateToProps,
    logout
  )(Nav)
);
