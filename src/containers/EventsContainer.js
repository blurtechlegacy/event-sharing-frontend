import React from "react";
import { connect } from "react-redux";
import styles from "../styles/EventsContainerStyles";
import Events from "../components/Events";
import SortAndFilterContainer from "./SortAndFilterContainer";
import * as actions from "../ducks/events-duck/Actions";
import * as selectors from "../ducks/events-duck/Selectors";
import axios from "axios";
class EventsContainer extends React.Component {
  componentDidMount() {
    this.props.fetchEvents();
    this.props.fetchTags();
    //   axios
    //     .get("http://104.41.217.114:1984/api/v001/events")
    //     .then(response => console.log(response.data));
  }
  click = () => {
    this.props.history.push("/login");
  };
  render() {
    return (
      <div>
        {/* <SortAndFilterContainer events={this.props.eventsList} /> */}
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
  fetchTags: actions.fetchTagsRequest
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EventsContainer);
