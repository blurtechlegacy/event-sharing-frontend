import React from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import AppBar from "material-ui/AppBar";
import Toolbar from "material-ui/Toolbar";
import Typography from "material-ui/Typography";
import Button from "material-ui/Button";
//import IconButton from "material-ui/IconButton";
import { withStyles } from "material-ui";
import UserIcon from "@material-ui/icons/Person";
import IconButton from "@material-ui/core/IconButton";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
const styles = {
  root: {
    justifyContent: "space-between",
    background: "transparent"
    //filter:'blur(10px)'
  },
  flex: {
    display: "flex",
    alignItems: "center",
    font: "HelveticaNeue-Light"
  },
  inline: {
    display: "inline"
  },
  buttBorder: {
    textColor: "white",
    //border:'1px #FFFFFF solid',
    //marginLeft:'500px',
    paddingRight: 20,
    fontSize: "20px",
    wavesEffect: "flat",
    "&:hover": {
      backgroundColor: "transparent"
    }
  },
  scroll: {
    background: "rgba(0,0,0,.2)",
    overflow: "hidden",
    position: "absolute"
  },
  hub: {
    color: "white",
    background: "red",
    paddingLeft: "5px",
    paddingRight: "5px",
    borderRadius: "5px",
    marginLeft: "3px"
  },
  you: {
    display: "flex",
    flexDirection: "row"
  },
  alignment: {
    alignSelf: "center"
  }
};

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      anchorEl: null
    };
  }
  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };
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
  };

  evsIamGoingTo = () => {
    console.log("evsIamGoingTo");
    this.props.history.push("/subscriptions");
    this.setState({ anchorEl: null });
  };
  toCreatedEvents = () => {
    this.props.history.push("/addedEvents");
    this.setState({ anchorEl: null });
  };

  render() {
    const open = Boolean(this.state.anchorEl);
    let button = null;
    let userName = null;
    if (this.props.isAuth) {
      button = (
        <Button
          className={this.props.classes.buttBorder}
          color="inherit"
          onClick={this.handleLogoutClick.bind(this)}
        >
          Log out
        </Button>
      );
    } else {
      button = (
        <Button
          className={this.props.classes.buttBorder}
          color="inherit"
          onClick={this.handleLoginClick.bind(this)}
        >
          Log in
        </Button>
      );
    }

    return (
      <AppBar className={this.props.classes.scroll}>
        <Toolbar className={this.props.classes.root}>
          <div className={this.props.classes.flex}>
            <Button
              disableRipple={true}
              className={this.props.classes.buttBorder}
              color="inherit"
              onClick={this.toHomepage.bind(this)}
            >
              Event<a className={this.props.classes.hub}>hub</a>
            </Button>
            <Button
              className={this.props.classes.buttBorder}
              color="inherit"
              onClick={this.toAddEvent}
            >
              Add event
            </Button>
          </div>
          <div className={this.props.classes.flex}>
            {this.props.isAuth && (
              <div className={this.props.classes.you}>
                <IconButton
                  aria-owns={open ? "menu-appbar" : null}
                  aria-haspopup="true"
                  onClick={this.handleMenu}
                  color="inherit"
                >
                  <AccountCircle />
                </IconButton>
                <Typography
                  className={this.props.classes.alignment}
                  color="inherit"
                >
                  {" "}
                  {this.props.username}
                </Typography>
                <Menu
                  id="menu-appbar"
                  anchorEl={this.state.anchorEl}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right"
                  }}
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right"
                  }}
                  open={open}
                  onClose={this.handleClose}
                >
                  <MenuItem onClick={this.evsIamGoingTo}>Profile</MenuItem>
                  <MenuItem onClick={this.toCreatedEvents}>My account</MenuItem>
                </Menu>
              </div>
            )}
            {button}
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
