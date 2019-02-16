import React, { Component } from 'react';

export default class NameGame extends Component {


  render() {
    return (
      <div onFocus={this.focus} onBlur={this.blur}>Here's the game</div>
    );
  }
}
