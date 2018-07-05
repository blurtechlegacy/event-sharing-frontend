import React from "react";
import { connect } from "react-redux";
import * as actions from "../ducks/events-duck/Actions";
import * as selectors from "../ducks/events-duck/Selectors";
import AddEvent from "../components/AddEvent";

class AddEventContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      eventName: "",
      eventDescription: "",
      eventPlace: "",
      eventDate: this.getDate(),
      eventSrartTime: "",
      eventTags: []
    };
  }

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
      console.log("tagKey", key);
      this.tagsArr[key] = event.target.value;
      console.log(this.tagsArr);
      this.setState({ eventTags: this.tagsArr });
      return;
    }
    this.setState({ [event.target.name]: event.target.value });
  };
  render() {
    console.log(this.state);
    return (
      <AddEvent
        handleChange={this.handleChange}
        tags={this.props.tags}
        date={this.state.eventDate}
      />
    );
  }
}

const mapStateToProps = state => ({
  tags: selectors.selectTagsList(state)
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddEventContainer);
