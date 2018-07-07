import React from "react";
import { connect } from "react-redux";
import * as actions from "../ducks/events-duck/Actions";
import * as selectors from "../ducks/events-duck/Selectors";
import Filter from "../components/Filter";
class SortAndFilterContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tagForFilter: ""
    };
  }
  componentDidMount() {
    this.setState({ tagForFilter: this.props.tagForFilter });
  }
  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
    //this.dispatchAddTagForFilter(this.state.tagForFilter);
  };

  dispatchAddTagForFilter = () => {
    this.props.addTagForFilter(this.state.tagForFilter);
    //   this.props.tagsList.forEach(element => {
    //     if (element.id === this.state.tagForFilter) {
    //       this.props.addTagForFilter(element.name);
    //     }
    //   });
  };
  render() {
    console.log("this.state.tagForFilter", this.state.tagForFilter);

    return (
      <div>
        <Filter
          handleChange={this.handleChange}
          selectTag={this.state.tagForFilter}
          tags={this.props.tagsList}
        />
        <button onClick={this.dispatchAddTagForFilter}>Filter</button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  tagsList: selectors.selectTagsList(state),
  tagForFilter: selectors.selectTagForFilter(state)
  //sortEvents: selectors.selectSortEventList(state)
});

const mapDispatchToProps = {
  addTagForFilter: actions.addTagForFilter
  //sortEvents: actions.fetchEventsRequest
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SortAndFilterContainer);
