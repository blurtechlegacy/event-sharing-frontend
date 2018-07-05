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
      eventSrartTime: "",
      eventEndTime: "",
      eventTags: []
    };
  }
  tagsArr = [];
  handleChange = (event, key = 0) => {
    this.setState({ [event.target.name]: event.target.value });
    if (event.target.name === "tag") {
      console.log("tagKey", key);
      //console.log(event.target.name);
      //this.state.eventTags.push(event.target.value);
      this.tagsArr[key] = event.target.value;
      console.log(this.tagsArr);
      this.setState({ eventTags: this.tagsArr });
      //this.setState({eventTags[key]: event.target.value });
      // this.setState({
      //   [event.target.name]: this.state.tags.push(event.target.value)
      // });
    }
  };
  render() {
    console.log(this.state);
    return <AddEvent handleChange={this.handleChange} tags={this.props.tags} />;
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
