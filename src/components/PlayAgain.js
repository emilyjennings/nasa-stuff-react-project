import React, { Component } from 'react';
import { Link } from "react-router-dom";


export default class PlayAgain extends Component {

  render() {

    return (
      <div className="playagainbutton">
        <Link to="/"><button>Again!</button></Link>
      </div>
    );
  }
}
