import React, { Component } from 'react';

export default class PlayAgain extends Component {

  render() {

    return (
      <div class="buttoncontainer">
        <button onClick={e => this.props.playAgain()}>Play Again!</button>
      </div>
    );
  }
}
