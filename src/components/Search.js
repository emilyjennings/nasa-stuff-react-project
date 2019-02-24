import React, { Component } from 'react';

export default class Search extends Component {



  render() {

    return (

      <div class="buttoncontainer">
        <button onClick={ e => this.props.showSearch(e)}>Search!</button>
      </div>

    );
  }
}
