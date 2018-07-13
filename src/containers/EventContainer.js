import React from "react";
import { connect } from "react-redux";
import * as actions from "../ducks/events-duck/Actions";
import * as eventsSelectors from "../ducks/events-duck/Selectors";
import * as authSelectors from "../ducks/auth-duck/Selectors";
import Event from "../components/Event";

class EventContainer extends React.Component {
  constructor(props) {
    super(props);
    const { id } = props.match.params;
    this.state = {
      event: props.eventsList.find(el => el.id == id)
    };
  }

  render() {
    return (
      <Event
        event={this.state.event}
        tags={this.props.tagsList}
        isAuth={this.props.isAuth}
        userId={this.props.user.id}
      />
    );
  }
}
const mapStateToProps = state => ({
  eventsList: eventsSelectors.selectEventsList(state),
  isAuth: authSelectors.selectAuthStatus(state),
  tagsList: eventsSelectors.selectTagsList(state),
  user: authSelectors.selectUser(state)
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EventContainer);
