import React, { Component } from 'react';

export default class Play extends Component {

  render() {

    return (
      <div class="buttoncontainer">
        <button onClick={ e => this.props.showGame(e)}>Play!</button>
      </div>
    );
  }
}
