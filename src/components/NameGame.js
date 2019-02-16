import React, { Component } from 'react';

export default class NameGame extends Component {

  playnamegame = event => {
    console.log([event.clientX, event.clientY]);
  };

  render() {
    return (
      <div onClick={this.playnamegame}>Here's the game</div>
    );
  }
}
