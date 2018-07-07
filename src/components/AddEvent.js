import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import TextField from "material-ui/TextField";
import Button from "@material-ui/core/Button";
import Tags from "./Tags";

const styles = theme => ({
  container: {
    marginTop: "5%",
    display: "flex",
    flexDirection: "column",
    width: "50%"
  }
});

const Event = props => {
  const inf = () => {
    console.log("addEvent", props.visibleElements);
  };
  const { classes } = props;

  return (
    <div className={classes.container}>
      {inf()}
      <TextField
        id="eventName"
        label="Name"
        name="eventName"
        className={classes.textField}
        onChange={props.handleChange}
        margin="normal"
      />
      <TextField
        id="eventDescription"
        label="Description"
        name="eventDescription"
        className={classes.textField}
        onChange={props.handleChange}
        margin="normal"
      />
      <TextField
        id="eventPlace"
        label="Place"
        name="eventPlace"
        className={classes.textField}
        onChange={props.handleChange}
        margin="normal"
      />
      <TextField
        id="date"
        label="Date"
        type="date"
        name="eventDate"
        defaultValue={props.date}
        //defaultValue={`${new Date().getYear()}-${new Date().getMonth()}-${new Date().getDay()}`}
        onChange={props.handleChange}
        className={classes.textField}
        InputLabelProps={{
          shrink: true
        }}
      />
      <TextField
        id="time"
        label="Start time"
        type="time"
        name="eventSrartTime"
        defaultValue=""
        onChange={props.handleChange}
        className={classes.textField}
        InputLabelProps={{
          shrink: true
        }}
        inputProps={{
          step: 300 // 5 min
        }}
      />
      <Tags
        tagsList={props.tags}
        handleChange={props.handleChange}
        visibleElements={props.visibleElements}
        changeVisible={props.changeVisible}
      />
      <Button onClick={props.sendEvent} variant="contained" color="primary">
        Add event
      </Button>
    </div>
  );
};

export default withStyles(styles)(Event);
