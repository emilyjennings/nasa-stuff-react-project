import React, { Component } from 'react';

export default class SearchButton extends Component {



  render() {

    return (
      <div class="buttoncontainer">
        <button onClick={ e => this.props.showSearch(e)}>Search!</button>
      </div>
    );
  }
}
