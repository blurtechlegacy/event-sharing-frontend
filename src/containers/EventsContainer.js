import React from "react";
import { connect } from "react-redux";
import styles from "../styles/EventsContainerStyles";
import * as actions from "../ducks/events-duck/Actions"; 
import * as selectors from "../ducks/events-duck/Selectors"

class EventsContainer extends React.Component {
  componentDidMount() {
    this.props.fetchEvents();
  };
  click = () => {
    this.props.history.push("/login");
  }
  render() {
    console.log("events: ",this.props.eventsList)
    return (
      <div>
          EventsContainer
          <button onClick = {this.click}>Регистрация</button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
   eventsList: selectors.selectEventsList(state)
  });
  
  const mapDispatchToProps = {
    fetchEvents: actions.fetchEventsRequest,
  };

  export default connect(mapStateToProps, mapDispatchToProps)(EventsContainer);