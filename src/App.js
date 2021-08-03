import React from "react";
import { Route, withRouter } from 'react-router-dom'
import API from './API'

import Navbar from './containers/Navbar'
import HomePage from './containers/HomePage'
import List from './containers/ListPage'
import Map from './containers/MapPage'

import './App.css';

class App extends React.Component {
  state = {
    allArticles: []
  }

  componentDidMount() {
    this.getArticles();
  }

  getArticles() {
    API.getArticles()
    .then(data => {
        console.log(data)
        this.setState({ allArticles: data })
      })
  }

  render() {
    return (
      <div className="App">
        <Route path='/' render={() => <Navbar />} />
        <Route exact path='/' render={() => <HomePage />} />
        <Route exact path='/list' render={props => <List {...props} allArticles={this.state.allArticles} />} />
        <Route exact path='/map' render={props => <Map {...props} allArticles={this.state.allArticles} />} />
      </div>
    );
  };
};

export default withRouter(App);
