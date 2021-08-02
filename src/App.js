import React from "react";
import { Route, withRouter } from 'react-router-dom'

import Navbar from './containers/Navbar'
import HomePage from './containers/HomePage'
import List from './containers/ListPage'
import Map from './containers/MapPage'

import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Route path='/' render={() => <Navbar />} />
        <Route exact path='/' component={HomePage} />
        <Route exact path='/list' render={() => <List />} />
        <Route exact path='/map' render={() => <Map />} />
      </div>
    );
  };
};

export default withRouter(App);
