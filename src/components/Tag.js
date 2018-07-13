import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Button from "material-ui/Button";
const styles = theme => ({
  container: {
    display: "flex",
    marginTop: "11px"
  },
  buttonColor: {
    marginTop: "10px",
    color: "blue",
    height: "48px"
  }
});

class Tag extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectTag: "",
      isHidden: true
    };
  }
  disabled = false;
  changeSelectTag = event => {
    this.setState({ selectTag: event.target.value });
    this.props.handleChange(event, this.props.tagKey);
    this.props.changeVisible(this.props.tagKey + 1);
  };

  toggle = () => {
    this.setState({ isHidden: !this.state.isHidden });
    let index = this.props.tagKey + 1;
    this.disabled = true;
  };

  tagsList = this.props.tagsList.map(element => {
    return (
      <MenuItem key={element.id} value={element.id}>
        {element.name}
      </MenuItem>
    );
  });

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.container}>
        {this.props.visibleOrHidden ? (
          <Button
            disabled={this.disabled}
            onClick={this.toggle}
            className={classes.buttonColor}
          >
            Add tag
          </Button>
        ) : (
          ""
        )}
        {!this.state.isHidden ? (
          <FormControl className={classes.formControl}>
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
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default withStyles(styles)(Tag);
