import React from "react";
import PropTypes from "prop-types";
import EventPreview from "./EventPreview";
import { withStyles } from "material-ui";
const styles = theme => ({
  container: {
    marginTop: "100px"
  }
});
const Events = props => {
  const { classes } = props;
  const eventsList = props.events.map(event => {
    return <EventPreview key={event.id} event={event} />;
  });

  return <div className={classes.container}>{eventsList}</div>;
};
export default withStyles(styles)(Events);
