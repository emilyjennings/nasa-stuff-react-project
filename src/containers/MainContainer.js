import React, { Component } from 'react';
import { Link } from "react-router-dom";


import SearchResults from '../components/SearchResults'
import SearchForm from '../components/SearchForm'
import SearchButton from '../components/SearchButton'
import PlayButton from '../components/PlayButton'
import Game from '../components/Game'
import $ from 'jquery'


export default class MainContainer extends Component {

  render() {
    return(
      <div>
        <Link to="/search"><SearchButton /></Link>
        <Link to="/game"><PlayButton /></Link>

      </div>
    )
  }
}
