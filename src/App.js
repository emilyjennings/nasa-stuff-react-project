import React, { Component } from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import $ from 'jquery'

import Game from './components/Game'
import SearchForm from './components/SearchForm'
import SearchResults from './components/SearchResults'

import './App.css';

import Header from './containers/Header'
import MainContainer from './containers/MainContainer'

export default class App extends Component {

  state = {
    images: []
  }



//The NASA API is called and then the results go to the state
  fetchImages = (query = "") => {
    $.ajax({
      url: `https://images-api.nasa.gov/search?q=${query}`
    }).then(json => {
      this.setState({ images: json.collection.items })
    })
  }

  //the welcome component has the header/navbar and the button to choose to search is toggled
    render() {
      return(
        <BrowserRouter>
          <div>
            <Header />
            <Route exact path="/" component={MainContainer} />

            <Route exact path="/game" component={Game} />

            <Route
             path="/search"
             render={(props) => <SearchForm {...props} fetchImages={this.fetchImages} />}
            />
            <Route
             path="/search"
             render={(props) => <SearchResults {...props} getResults={this.state.images} />}
            />
          </div>
        </BrowserRouter>
      )
    }

}
