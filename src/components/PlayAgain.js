import React, { Component } from 'react';
import { Link } from "react-router-dom";


export default class PlayAgain extends Component {

  render() {

    return (
      <div class="buttoncontainer">
        <Link to="/"><button>Play Again!</button></Link>
      </div>
    );
  }
}
