import React from 'react';
import PropTypes from 'prop-types';
import EventPreview from './EventPreview';
import {withStyles} from "@material-ui/core/styles/index";

const styles = {
    parentEvent: {
        display: 'flex',
        marginTop: '70px',
        alignItems: 'start',
        alignContent:'center'



    }


}
const Events = props => {
    console.log(props.events);
    const eventsList = props.events.map(event => {

        return (
            <EventPreview key={event.id} event={event}/>
        );
    });
    const {classes} = props;
    return (<div className={classes.parentEvent}> {eventsList}</div>

    )


}

export default withStyles(styles)(Events);
