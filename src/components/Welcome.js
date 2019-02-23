import React, { Component } from 'react';

export default class Welcome extends Component {

  // diappear = () => {
  //   this.hide()
  // }



  render() {

    return (
      <div>
        <button onClick={ e => this.props.showGame(e)}>Play!</button>
      </div>
    );
  }
}
