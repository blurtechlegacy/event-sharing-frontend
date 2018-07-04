import React from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import AppBar from "material-ui/AppBar";
import Toolbar from "material-ui/Toolbar";
import Typography from "material-ui/Typography";
import Button from "material-ui/Button";
import IconButton from "material-ui/IconButton";
import { withStyles } from "material-ui";
const styles = {
  root: {
    justifyContent: "space-between",
    backgroundColor: "green"
  },
  flex: {
    display: "flex",
    alignItems: "center"
  },
  inline: {
    display: "inline"
  }
};

class NavBar extends React.Component {
  handleLoginClick() {
    this.props.history.push("/login");
  }
  handleLogoutClick() {
    this.props.logOut();
    this.props.history.push("/");
  }
  toHomepage() {
    this.props.history.push("/");
  }
  toAddEvent = () => {
    if (this.props.isAuth) {
      this.props.history.push("/addevent");
      return;
    }
    this.props.history.push("/login");
  }

  render() {
    let button = null;
    let userName = null;
    // if (this.props.isAuth) {
    //   button = (
    //     <Button color="inherit" onClick={this.handleLogoutClick.bind(this)}>
    //       Log out
    //     </Button>
    //   );
    //   userName = <Typography>Username: {this.props.username}</Typography>;
    // } else {
    //   button = (
    //     <Button color="inherit" onClick={this.handleLoginClick.bind(this)}>
    //       Log in
    //     </Button>
    //   );
    // }

    return (
      <AppBar>
        <Toolbar className={this.props.classes.root}>
          <div className={this.props.classes.flex}>
            <Typography variant="title" color="inherit">
              My App
            </Typography>
            <Button color="inherit" onClick={this.toHomepage.bind(this)}>
              Home
            </Button>
            <Button color="inherit" onClick={this.toAddEvent}>
              Movies
            </Button>
          </div>
          <div className={this.props.classes.flex}>
            {/* {userName}
            {button} */}
            <Button color="inherit" onClick={this.handleLoginClick.bind(this)}>
              Log in
            </Button>
          </div>
        </Toolbar>
      </AppBar>
    );
  }
}
// NavBar.propTypes = {
//   userName: PropTypes.string.isRequired,
//   isAuth: PropTypes.bool.isRequired,
//   logOut: PropTypes.func.isRequired,
//   classes: PropTypes.object.isRequired,
//   history: PropTypes.object.isRequired
// };
export default withStyles(styles)(withRouter(NavBar));
