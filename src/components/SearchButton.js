import React, { Component } from 'react';

export default class SearchButton extends Component {


//This component just renders a button to choose to search
  render() {

    return (
      <div class="buttoncontainer">
        <button onClick={ e => this.props.showSearch(e)}>Search!</button>
      </div>
    );
  }
}
