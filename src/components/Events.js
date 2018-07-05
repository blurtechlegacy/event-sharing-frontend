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
  console.log(props.events);
  const eventsList = props.events.map(event => {
    return <EventPreview key={event.id} event={event} />;
  });

  return <div className="container">{eventsList}</div>;
};
export default withStyles(styles)(Events);
