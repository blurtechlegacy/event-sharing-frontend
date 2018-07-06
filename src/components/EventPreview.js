import React from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
const EventPreview = props => {
  function showMore() {
    //getMovie(movie.id);
    props.history.push(`/event/${props.event.id}`);
  }

  return (
    <div className="container">
      <h2>{props.event.name}</h2>
      <button onClick={showMore}>Show more</button>
    </div>
  );
};

export default withRouter(EventPreview);
