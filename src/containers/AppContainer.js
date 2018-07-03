import React from "react";
import { Route } from "react-router-dom";
import EventsContainer from "./EventsContainer";
import AuthContainer from "./AuthContainer";
import AddEventContainer from "./AddEventContainer";
import NavBar from "../components/NavBar";

import { withRouter } from "react-router-dom";

class AppContainer extends React.Component {
  render() {
    return (
      <div>
        <NavBar/>
        <Route exact path="/" component={EventsContainer} />
        <Route path="/login" component={AuthContainer} />
        <Route path="/addevent" component={AddEventContainer} />
      </div>
    );
  }
}



export default withRouter(AppContainer);