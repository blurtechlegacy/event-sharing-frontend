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

const Tags = props => {
  const tags = props.tagsList.map((element, index) => {
    console.log(index, props.visibleElements[index]);
    return (
      <Tag
        key={index}
        tagKey={index}
        tagsList={props.tagsList}
        handleChange={props.handleChange}
        visibleOrHidden={props.visibleElements[index]}
        visibleElements={props.visibleElements}
        changeVisible={props.changeVisible}
      />
    );
  });

  return tags;
};

export default withStyles(styles)(Tags);
