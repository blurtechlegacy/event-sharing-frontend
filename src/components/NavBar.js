import React from "react";
import {withRouter} from "react-router-dom";
import PropTypes from "prop-types";
import AppBar from "material-ui/AppBar";
import Toolbar from "material-ui/Toolbar";
import Typography from "material-ui/Typography";
import Button from "material-ui/Button";
import IconButton from "material-ui/IconButton";
import {withStyles} from "material-ui";

const styles = {
    root: {
        justifyContent: "space-between",
        backgroundColor: "#ff6e40",

    },
    flex: {
        display: "flex",
        alignItems: "center",
        font: "HelveticaNeue-Light",

    },
    inline: {
        display: "inline"
    },
    buttBorder:{
        textColor:'white',
        border:'1px #000 solid',
        marginLeft:'15px'
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
        if (this.props.isAuth) {
            button = (
                <Button className={this.props.classes.buttBorder} color="white" onClick={this.handleLogoutClick.bind(this)}>
                    Log out
                </Button>
            );
            userName = <Typography>Username: {this.props.username}</Typography>;
        } else {
            button = (
                <Button className={this.props.classes.buttBorder} color="white" onClick={this.handleLoginClick.bind(this)}>
                    Log in
                </Button>
            );
        }

        return (
            <AppBar>
                <Toolbar className={this.props.classes.root}>
                    <div className={this.props.classes.flex}>
                        <Button className={this.props.classes.buttBorder} color="white" onClick={this.toHomepage.bind(this)}>
                            EventsSharing
                        </Button>
                        <Button className={this.props.classes.buttBorder} color="white" onClick={this.toAddEvent}>
                            Добавить событие
                        </Button>
                    </div>
                    <div className={this.props.classes.flex}>
                        {userName}
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