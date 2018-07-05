import React from "react";
import { Route, withRouter } from "react-router-dom";
import EventsContainer from "./EventsContainer";
import AuthContainer from "./AuthContainer";
import AddEventContainer from "./AddEventContainer";
import NavBar from "../components/NavBar";
import { connect } from "react-redux";
import * as actions from "../ducks/auth-duck/Actions";
import * as selectors from "../ducks/auth-duck/Selectors";
import { withStyles } from "material-ui";

const styles = {
  container: {
    width: "80%",
    margin: "0 auto"
  }
};

class AppContainer extends React.Component {
  render() {
    return (
      <div className={this.props.classes.container}>
        <NavBar
          username={this.props.username}
          isAuth={this.props.isAuth}
          logOut={this.props.logOut}
        />
        <Route exact path="/" component={EventsContainer} />
        <Route path="/login" component={AuthContainer} />
        <Route path="/addevent" component={AddEventContainer} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  username: selectors.selectUsername(state),
  isAuth: selectors.selectAuthStatus(state)
});

const mapDispatchToProps = {
  logOut: actions.logOut
};

export default withStyles(styles)(
  withRouter(
    connect(
      mapStateToProps,
      mapDispatchToProps
    )(AppContainer)
  )
);
