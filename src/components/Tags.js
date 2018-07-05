import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { selectTagsList } from "../ducks/events-duck/Selectors";
import Tag from "./Tag";
const styles = theme => ({
  container: {}
});

class Tags extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectTag: "",
      tagsCount: 3
    };
  }
  tagsList = this.props.tagsList.map((element, index) => {
    console.log(element);
    console.log(index);
    return (
      <Tag
        key={index}
        tagKey={index}
        tagsList={this.props.tagsList}
        handleChange={this.props.handleChange}
      />
    );
  });
  classes = this.props;
  render() {
    return this.tagsList;
  }
}

export default withStyles(styles)(Tags);
