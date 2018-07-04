import React from 'react';
import PropTypes from 'prop-types';
import EventPreview from './EventPreview';

const Events = props => {
    console.log(props.events);
    const eventsList = props.events.map(event => {
        return (
          <EventPreview key={event.id} event={event} />
        );
      });
      return eventsList;
}

export default Events;