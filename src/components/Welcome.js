import React, { Component } from 'react';

export default class Welcome extends Component {

  welcome = () => {
    alert("Welcome!")
  }


  render() {

    return (
      <div>
        <button onClick={this.welcome}>Play!</button>
      </div>
    );
  }
}
