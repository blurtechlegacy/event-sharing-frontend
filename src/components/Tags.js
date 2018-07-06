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
      amountVisibleTags: 5
    };
  }
  render() {
    const tags = this.props.tagsList.map((element, index) => {
      console.log(index, this.props.visibleElements[index]);
      if (index < this.state.amountVisibleTags) {
        return (
          <Tag
            key={index}
            tagKey={index}
            tagsList={this.props.tagsList}
            handleChange={this.props.handleChange}
            visibleOrHidden={this.props.visibleElements[index]}
            visibleElements={this.props.visibleElements}
            changeVisible={this.props.changeVisible}
          />
        );
      }
    });

    return tags;
  }
}

// const Tags = props => {
//   const amountVisibleTags = 5;
//   const tags = props.tagsList.map((element, index) => {
//     console.log(index, props.visibleElements[index]);
//     if (index < amountVisibleTags) {
//       return (
//         <Tag
//           key={index}
//           tagKey={index}
//           tagsList={props.tagsList}
//           handleChange={props.handleChange}
//           visibleOrHidden={props.visibleElements[index]}
//           visibleElements={props.visibleElements}
//           changeVisible={props.changeVisible}
//         />
//       );
//     }
//   });

//   return tags;
// };

export default withStyles(styles)(Tags);
