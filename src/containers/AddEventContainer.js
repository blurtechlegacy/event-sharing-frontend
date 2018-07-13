import React from "react";
import { connect } from "react-redux";
import * as actions from "../ducks/events-duck/Actions";
import * as selectors from "../ducks/events-duck/Selectors";
import * as authSelectors from "../ducks/auth-duck/Selectors";
import AddEvent from "../components/AddEvent";
import axios from "axios";
import moment from "moment";
class AddEventContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      eventName: "",
      eventDescription: "",
      eventPlace: "54.98, 82.89",
      eventDate: this.getDate(),
      eventSrartTime: "",
      eventDateArr: [],
      eventSrartTimeArr: [],
      eventTags: []
    };
  }

  visibleElementsArr = [true];

  changeVisible = index => {
    this.visibleElementsArr[index] = true;

    console.log("вызвано");
  };

  getDate = () => {
    let year = new Date().getUTCFullYear();
    let month =
      new Date().getUTCMonth() + 1 < 10
        ? `0${new Date().getUTCMonth() + 1}`
        : new Date().getUTCMonth() + 1;
    let day =
      new Date().getUTCDay() + 1 < 10
        ? `0${new Date().getUTCDay() + 1}`
        : new Date().getUTCDay() + 1;
    return `${year}-${month}-${day}`;
  };

  tagsArr = [];

  handleChange = (event, key = 0) => {
    if (event.target.name === "tag") {
      this.tagsArr[key] = event.target.value;

      this.setState({ eventTags: this.tagsArr });
      return;
    }
    this.setState({ [event.target.name]: event.target.value });
    this.setState({ eventDateArr: this.state.eventDate.split("-") });

    this.setState({
      eventSrartTimeArr: this.state.eventSrartTime.split(":")
    });
  };
  send = () => {
    this.props.addEvent({
      host: this.props.user.id,
      name: this.state.eventName,
      host_name: this.props.user.login,
      description: this.state.eventDescription,
      place: this.state.eventPlace,
      tags: this.state.eventTags,
      guests: [],
      start: `${new Date(
        moment(`${this.state.eventDate} ${this.state.eventSrartTime}`)
      ).getTime()}`,
      end: `${new Date(
        moment(`${this.state.eventDate} ${this.state.eventSrartTime}`)
      ).getTime()}`
    });

    // axios
    //   .post("http://104.41.217.114:1984/api/v001/events", {
    //     host: this.props.user.id,
    //     name: this.state.eventName,
    //     description: this.state.eventDescription,
    //     place: this.state.eventPlace,
    //     tags: this.state.eventTags,
    //     start: `${this.state.eventDate} ${this.state.eventSrartTime}`,
    //     end: `${this.state.eventDate} ${this.state.eventSrartTime}`
    //   })
    //   .then(res => console.log(res))
    //   .catch(err => console.log(err));
  };

  sendEvent = () => {
    this.send();
  };

  render() {
    console.log(this.state);
    console.log(
      "moment",
      `${new Date(
        moment(`${this.state.eventDate} ${this.state.eventSrartTime}`)
      ).getTime()}`
    );
    
    
    return (
      <AddEvent
        handleChange={this.handleChange}
        tags={this.props.tags}
        date={this.state.eventDate}
        visibleElements={this.visibleElementsArr}
        changeVisible={this.changeVisible}
        sendEvent={this.sendEvent}
      />
    );
  }
}

const mapStateToProps = state => ({
  tags: selectors.selectTagsList(state),
  user: authSelectors.selectUser(state),
  addEventRes: selectors.addEventRes(state)
});

const mapDispatchToProps = {
  addEvent: actions.addEventRequest
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddEventContainer);
