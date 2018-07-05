import React from "react";
import PropTypes from "prop-types";

const EventPreview = props => {
  return (
    <div className="container">
      <h2>{props.event.name}</h2>
    </div>
  );
};

export default EventPreview;
