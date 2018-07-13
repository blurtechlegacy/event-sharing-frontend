import React from "react";
import PropTypes from "prop-types";
import axios from "axios";
import { YMaps, Map, Placemark } from "react-yandex-maps";

import { withStyles } from "material-ui";
import Button from "@material-ui/core/Button";
const styles = theme => ({
  container: {
    marginTop: "100px",
    display: "flex",
    flexDirection: "row"
  },
  right: {
    display: "flex",
    flexDirection: "column"
  },
  left: {
    display: "flex"
  },
  btn: {}
});

class EventPreview extends React.Component {
  state = {
    showSecretData: false,
    coordinates: this.props.event.place.split(",")
  };

  follow = () => {
    if (!this.props.isAuth) {
      alert("Please,log in");
    } else {
      axios
        .post("http://104.41.217.114:1984/api/v001/events/assign", {
          user_id: this.props.userId,
          event_id: this.props.event.id
        })
        .then(res => console.log(res))
        .catch(err => console.log(err));
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
    console.log(this.state);
    const { classes } = this.props;
    return (
      <div className={classes.container}>
        <div className={classes.right}>
          <h2>{this.props.event.name}</h2>
          <p>{this.props.event.description}</p>
          {/* <p>{this.props.event.start}</p> */}

          {this.state.showSecretData && (
            <YMaps>
              <Map
                state={{
                  center: this.state.coordinates,
                  zoom: 10,
                  controls: []
                }}
                instanceRef={this.setMapControlRef}
              >
                <Placemark
                  geometry={{
                    coordinates: this.state.coordinates
                  }}
                  properties={{
                    hintContent: this.props.event.name,
                    iconContent: "E"
                  }}
                  options={{
                    preset: "islands#nightCircleIcon"
                  }}
                />
              </Map>
            </YMaps>
          )}
        </div>
        <div className={classes.left}>
          <Button
            variant="extendedFab"
            aria-label="delete"
            className={classes.button}
            onClick={this.follow}
          >
            Follow
          </Button>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(EventPreview);
