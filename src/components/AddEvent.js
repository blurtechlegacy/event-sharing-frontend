import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Tags from "./Tags";

const styles = theme => ({
  container: {
    marginTop: "20%"
  }
});

const Event = props => {
  const { classes } = props;
  console.log(props.tags);

  return (
    <div className={classes.container}>
      <input type="text" name="eventName" onChange={props.handleChange} />
      <input
        type="text"
        name="eventDescription"
        onChange={props.handleChange}
      />
      <input type="text" name="eventPlace" onChange={props.handleChange} />
      <Tags tagsList={props.tags} handleChange={props.handleChange} />
    </div>
  );
};

export default withStyles(styles)(Event);
