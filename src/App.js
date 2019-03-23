import React, { Component } from 'react';
import { BrowserRouter, Route } from "react-router-dom";

import './App.css';
import Game from './components/Game'
import SearchForm from './components/SearchForm'

import Header from './containers/Header'
import MainContainer from './containers/MainContainer'

export default class App extends Component {

  //the welcome component has the header/navbar and the button to choose to search is toggled
    render() {
      return(
        <BrowserRouter>
          <div>
            <Header />

            <Route exact path="/" component={MainContainer} />
            <Route exact path="/game" component={Game} />
            <Route exact path="/search" component={SearchForm} />
          </div>
        </BrowserRouter>
      )
    }

}
