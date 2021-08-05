import React from 'react'
import GoogleMapReact from 'google-map-react';

import Marker from '../components/Marker'
import ArticleDetails from '../components/ArticleDetails'

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
  
  openDetails = (articleId) => {
    const article = this.props.allArticles.find(article => article.id === articleId);

    this.setState({ currentArticle: article });
  };

  render() {
    const defaultCenter = {
      lat: 51.76,
      lng: -3.77
    };

    const { allArticles } = this.props;
    const { currentArticle } = this.state;
    const { openDetails } = this;

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
              active={article === currentArticle}
              key={article.id}
              articleId={article.id}
              lat={article.location.latitude}
              lng={article.location.longitude}
              text={article.text}
              openDetails={openDetails}
            />
          ))}
        </GoogleMapReact>

        {this.state.currentArticle ?
          <ArticleDetails article={this.state.currentArticle}/>
        : null}
      </div>
    );
  }
}

export default MapPage