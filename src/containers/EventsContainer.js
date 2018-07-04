import React from "react";
import { connect } from "react-redux";
import styles from "../styles/EventsContainerStyles";
import Events from "../components/Events";
import * as actions from "../ducks/events-duck/Actions"; 
import * as selectors from "../ducks/events-duck/Selectors"
class EventsContainer extends React.Component {
  componentDidMount() {
    //this.props.fetchEvents();
  };
  click = () => {
    this.props.history.push("/login");
  }
  render() {
    console.log(this.props.eventsList.forEach(element => {
      console.log(element.id)
    }));
    
    return (
      <div>
          <Events events={this.props.eventsList} />
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