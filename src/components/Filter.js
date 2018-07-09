import React from "react";
import PropTypes from "prop-types";
import EventPreview from "./EventPreview";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import TextField from "material-ui/TextField";
import Button from "@material-ui/core/Button";
import { withStyles } from "material-ui";

const styles = theme => ({
  container: {
    marginTop: "80px"
  }
});

const Filter = props => {
  const { classes } = props;
  const tagsList = props.tags.map(element => {
    return (
      <MenuItem key={element.id} value={element.id}>
        {element.name}
      </MenuItem>
    );
  });
  return (
    <div className={classes.container}>
      <FormControl className={classes.formControl}>
        <Select
          value={props.selectTag}
          onChange={props.handleChange}
          displayEmpty
          name="tagForFilter"
          className={classes.selectEmpty}
        >
          <MenuItem value="">
            <em>All</em>
          </MenuItem>
          {tagsList}
        </Select>
        <FormHelperText>Without label</FormHelperText>
      </FormControl>
    </div>
  );
};

export default withStyles(styles)(Filter);
