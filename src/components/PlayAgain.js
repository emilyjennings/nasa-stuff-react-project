import React, { Component } from 'react';
import { Link } from "react-router-dom";


export default class PlayAgain extends Component {

  reloadPage = () => {
    document.location.reload(true)
  }

  render() {

    return (
      <div className="playagainbutton">
        <button onClick={this.reloadPage}>Again!</button>
      </div>
    );
  }
}
