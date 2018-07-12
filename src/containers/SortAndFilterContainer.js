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
  };

  dispatchAddTagForFilter = () => {
    this.props.addTagForFilter(this.state.tagForFilter);
  };

  render() {
    return (
      <div>
        <Filter
          handleChange={this.handleChange}
          selectTag={this.state.tagForFilter}
          tags={this.props.tagsList}
          dispatchAddTagForFilter={this.dispatchAddTagForFilter}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  tagsList: selectors.selectTagsList(state),
  tagForFilter: selectors.selectTagForFilter(state)
});

const mapDispatchToProps = {
  addTagForFilter: actions.addTagForFilter
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SortAndFilterContainer);
