import React from "react";
import ReactDOM from "react-dom";
import { YMaps, Map, Placemark } from "react-yandex-maps";

class ContactMap extends React.Component {
  constructor(props) {
    super(props);
    this.mapControl = null;
  }

  render() {
    return (
      <YMaps>
        <Map
          state={{
            center: [55.030199, 82.92043],
            zoom: 10,
            controls: []
          }}
          instanceRef={this.setMapControlRef}
        >
          <Placemark
            geometry={{
              coordinates: [54.98, 82.89]
            }}
            properties={{
              hintContent: "Your placemark",
              iconContent: "P"
            }}
            options={{
              preset: "islands#redCircleIcon"
            }}
          />
        </Map>
      </YMaps>
    );
  }
}

export default ContactMap;
