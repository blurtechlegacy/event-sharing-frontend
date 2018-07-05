import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const styles = theme => ({
  container: {}
});

class Tag extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectTag: ""
    };
  }

  changeSelectTag = event => {
    this.setState({ selectTag: event.target.value });
    this.props.handleChange(event, this.props.tagKey);
  };

  tagsList = this.props.tagsList.map(element => {
    console.log(element);
    return (
      <MenuItem key={element.id} value={element.id}>
        {element.name}
      </MenuItem>
    );
  });
  classes = this.props;
  render() {
    console.log("key", this.props.tagKey);
    return (
      <FormControl className={this.classes.formControl}>
        <InputLabel htmlFor="tag">tag</InputLabel>
        <Select
          value={this.state.selectTag}
          onChange={this.changeSelectTag}
          inputProps={{
            name: "tag",
            id: "tag"
          }}
        >
          {this.tagsList}
        </Select>
      </FormControl>
    );
  }
}

export default withStyles(styles)(Tag);
