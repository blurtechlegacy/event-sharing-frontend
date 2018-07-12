import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui";
import Button from '@material-ui/core/Button';



const styles = theme => ({
  container: {
    marginTop: "100px"
  }
});

class EventPreview extends React.Component {
  state = {
    showSecretData: false
  };

  follow = () => {
    if (!this.props.isAuth) {
      alert("Please,log in");
    } else {
      this.setState({ showSecretData: true });
    }
  };
  getTags() {
    return this.props.tags.filter(
      (el, index) => el.id === this.props.event.tags[index]
    );
  }

  render() {
    console.log("tags", this.getTags());

    const { classes } = this.props;
    return (
      <div className={classes.container}>
        <h2>{this.props.event.name}</h2>
        <p>{this.props.event.description}</p>
        <p>{this.props.event.start}</p>
        <Button onClick={this.follow}>Follow</Button>
        {this.state.showSecretData && <p>{this.props.event.place}</p>}
      </div>
    );
  }
}

export default withStyles(styles)(EventPreview);
