import React, { Component } from 'react';
import { Link } from "react-router-dom";


import SearchButton from '../components/SearchButton'
import PlayButton from '../components/PlayButton'


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
