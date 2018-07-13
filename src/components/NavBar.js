import React from "react";
import {withRouter} from "react-router-dom";
import PropTypes from "prop-types";
import AppBar from "material-ui/AppBar";
import Toolbar from "material-ui/Toolbar";
import Typography from "material-ui/Typography";
import Button from "material-ui/Button";
import IconButton from "material-ui/IconButton";
import {withStyles} from "material-ui";
import UserIcon from '@material-ui/icons/Person';

const styles = {
        root: {
            justifyContent: "space-between",
            background: 'transparent',
            //filter:'blur(10px)'


        },
        flex: {
            display: "flex",
            alignItems: "center",
            font: "HelveticaNeue-Light",


        },
        inline: {
            display: "inline"
        },
        buttBorder: {
            textColor: 'white',
            //border:'1px #FFFFFF solid',
            //marginLeft:'500px',
            paddingRight: 20,
            fontSize: '20px',
            wavesEffect:'flat',
            "&:hover": {
                backgroundColor:'transparent'
            }
        },
        scroll: {
            background: 'rgba(0,0,0,.2)',
            overflow: 'hidden',
            position: 'absolute'

        },
        hub: {
            color: 'white',
            background: 'red',
            paddingLeft: '5px',
            paddingRight: '5px',
            borderRadius: '5px',
            marginLeft:'3px'
        },
    you:{
            display:'flex',
        flexDirection:'row'
    }

    }
;

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
                <Button className={this.props.classes.buttBorder} color="inherit"
                        onClick={this.handleLogoutClick.bind(this)}>
                    Log out
                </Button>
            );


        } else {
            button = (
                <Button className={this.props.classes.buttBorder} color="inherit"
                        onClick={this.handleLoginClick.bind(this)}>
                    Log in
                </Button>
            );
        }

        return (
            <AppBar className={this.props.classes.scroll}>
                <Toolbar className={this.props.classes.root}>
                    <div className={this.props.classes.flex}>
                        <Button disableRipple={true} className={this.props.classes.buttBorder} color="inherit"
                                onClick={this.toHomepage.bind(this)}>
                            Event<a className={this.props.classes.hub}>
                            hub</a>
                        </Button>
                        <Button className={this.props.classes.buttBorder} color="inherit" onClick={this.toAddEvent}>
                            Add event
                        </Button>
                    </div>
                    <div className={this.props.classes.flex}>

                        {this.props.isAuth && (
                            <div className={this.props.classes.you}>
                            <UserIcon/>
                            <Typography color="inherit"> {this.props.username}</Typography>
                            </div>)}
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