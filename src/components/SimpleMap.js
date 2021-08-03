import React from "react";
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div><img src="icon-marker.png" alt={`${text}`} height="50px" width="50px"/></div>;

function SimpleMap(){
  const defaultProps = {
    center: {
      lat: 51.75582324,
      lng: -3.77156976
    },
    zoom: 9
  };

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: '50vh', width: '50%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent
          lat={51.75582324}
          lng={-3.77156976}
          text="My Marker"
        />
      </GoogleMapReact>
    </div>
  );
}

export default SimpleMap