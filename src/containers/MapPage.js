import React from 'react'
import GoogleMapReact from 'google-map-react';

import Marker from '../components/Marker'

const getMapBounds = (map, maps, articles) => {
  const bounds = new maps.LatLngBounds();

  articles.forEach((article) => {
    bounds.extend(new maps.LatLng(
      article.location.latitude,
      article.location.longitude,
    ));
  });
  return bounds;
};

const bindResizeListener = (map, maps, bounds) => {
  maps.event.addDomListenerOnce(map, 'idle', () => {
    maps.event.addDomListener(window, 'resize', () => {
      map.fitBounds(bounds);
    });
  });
};

const apiIsLoaded = (map, maps, articles) => {
  const bounds = getMapBounds(map, maps, articles);

  map.fitBounds(bounds);

  bindResizeListener(map, maps, bounds);
};

class MapPage extends React.Component {
  state = { currentArticle: null }
  
  openDetails = (article) => {
    this.setState(state => ({ currentArticle: article }));
  };

  render() {
    const defaultCenter = {
      lat: 51.76,
      lng: -3.77
    };

    const { allArticles } = this.props
    const { openDetails } = this

    return (
      <div className='map-page'>
        <GoogleMapReact
          defaultCenter={defaultCenter}
          defaultZoom={11}
          yesIWantToUseGoogleMapApiInternals
          onGoogleApiLoaded={({ map, maps }) => apiIsLoaded(map, maps, allArticles)}
        >
          {allArticles.map((article) => (
            <Marker
              key={article.id}
              article={article}
              lat={article.location.latitude}
              lng={article.location.longitude}
              openDetails={openDetails}
            />
          ))}
        </GoogleMapReact>

        {this.state.currentArticle ? <p>{this.state.currentArticle.title}</p> : null}
      </div>
    );
  }
}

export default MapPage