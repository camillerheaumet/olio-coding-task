import React from 'react';
import GoogleMapReact from 'google-map-react';

import Marker from '../components/Marker'

class SimpleMap extends React.Component {
  render() {
    const { latitude, longitude, text } = this.props

    const defaultCenter = {
      lat: latitude,
      lng: longitude
    };

    return (
      <div className="simple-map">
        <GoogleMapReact
          defaultCenter={defaultCenter}
          defaultZoom={11}
        >
          <Marker
            active={false}
            lat={latitude}
            lng={longitude}
            text={text}
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap