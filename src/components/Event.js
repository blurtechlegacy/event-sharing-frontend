import React from "react";
import PropTypes from "prop-types";
import { YMaps, Map, Placemark } from "react-yandex-maps";

import { withStyles } from "material-ui";
const styles = theme => ({
  container: {
    marginTop: "100px"
  }
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
        <h2>{this.props.event.name}</h2>
        <p>{this.props.event.description}</p>
        <p>{this.props.event.start}</p>
        <button onClick={this.follow}>Follow</button>
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
    );
  }
}

export default withStyles(styles)(EventPreview);
