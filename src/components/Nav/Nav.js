import React from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";

class Nav extends React.Component {
  render() {
    console.log(this.props);
    const { location } = this.props;
    console.log(location.pathname);

    if (location.pathname !== "/") {
      return (
        <div>
          <Link to="/">
            <button>Logout</button>
          </Link>
          <Link to="/dashboard">
            <button>Home</button>
          </Link>
          <Link to="/post/:postid">
            <button>New Post</button>
          </Link>
        </div>
      );
    }
    return null;
  }
}

// export default withRouter(Nav);

function mapStateToProps(state) {
  return {
    username: state.username,
    picture: state.picture
  };
}

export default withRouter(connect(mapStateToProps)(Nav));
