import React from "react";
import { connect } from "react-redux";
import * as actions from "../ducks/events-duck/Actions";
import * as selectors from "../ducks/events-duck/Selectors";
import * as authSelectors from "../ducks/auth-duck/Selectors";
import AddEvent from "../components/AddEvent";
import axios from "axios";

class AddEventContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      eventName: "",
      eventDescription: "",
      eventPlace: "",
      eventDate: this.getDate(),
      eventSrartTime: "",
      //eventStart: this.state.eventData + " " + this.state.eventSrartTime,
      eventTags: [],
      visibleElements: [true, false, false, false]
    };
  }
  visibleElementsArr = [true, false, false, false];
  changeVisible = index => {
    this.visibleElementsArr[index] = true;
    this.setState({ visibleElements: this.visibleElementsArr });
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
  };
  send = () => {
    axios
      .post("http://104.41.217.114:1984/api/v001/events", {
        host: this.props.user.id,
        name: this.state.eventName,
        description: this.state.eventDescription,
        place: this.state.eventPlace,
        tags: this.state.eventTags,
        start: `${this.state.eventDate} ${this.state.eventSrartTime}`,
        end: `${this.state.eventDate} ${this.state.eventSrartTime}`
      })
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };
  sendEvent = () => {
    this.send();
  };
  render() {
    console.log(this.state);
    return (
      <AddEvent
        handleChange={this.handleChange}
        tags={this.props.tags}
        date={this.state.eventDate}
        visibleElements={this.state.visibleElements}
        changeVisible={this.changeVisible}
        sendEvent={this.sendEvent}
      />
    );
  }
}

const mapStateToProps = state => ({
  tags: selectors.selectTagsList(state),
  user: authSelectors.selectUser(state)
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddEventContainer);
