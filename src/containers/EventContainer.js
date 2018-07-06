import React from "react";
import { connect } from "react-redux";
import * as actions from "../ducks/events-duck/Actions";
import * as eventsSelectors from "../ducks/events-duck/Selectors";
import * as authSelectors from "../ducks/auth-duck/Selectors";
import Event from "../components/Event";

class EventContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      event: {}
    };
  }
  componentDidMount() {
    const id = this.props.match.params.id;
    console.log("id", id);
    const event = this.props.eventsList.filter(el => {
      return el.id == id;
    });
    console.log(event);
    this.setState({ event: event[0] });
  }
  render() {
    console.log(this.state.event);
    return <Event event={this.state.event} isAuth={this.props.isAuth} />;
  }
}
const mapStateToProps = state => ({
  eventsList: eventsSelectors.selectEventsList(state),
  isAuth: authSelectors.selectAuthStatus(state)
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EventContainer);
