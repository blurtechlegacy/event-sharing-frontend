import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui";
const styles = theme => ({
  container: {
    marginTop: "100px"
  }
});

class EventPreview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: "",
      secretData: false
    };
  }
  componentDidMount() {
    this.setState({ visible: this.props.isAuth });
  }
  secretData = "";
  follow = () => {
    if (!this.state.visible) {
      alert("Нужно зарегаться");
      return;
    }
    this.setState({ secretData: true });
    this.secretData = <p>{this.props.event.place}</p>;
  };
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.container}>
        <h2>{this.props.event.name}</h2>
        <p>{this.props.event.description}</p>
        <p>{this.props.event.start}</p>
        <button onClick={this.follow}>Follow</button>
        {this.secretData}
      </div>
    );
  }
}

export default withStyles(styles)(EventPreview);
