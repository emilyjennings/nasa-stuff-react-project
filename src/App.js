import React, { Component } from 'react';
import './App.css';

import Play from './components/Play';
import Welcome from './components/Welcome';
import Game from './components/Game';
import Nav from './components/Nav'
import Search from './components/Search'
import SearchImages from './components/SearchImages'

class App extends Component {
  state = {
    buttonClicked: false,
    buttonSearchClicked: false
  }

  showGame = (e) => {
    e.preventDefault();
    this.setState({
      buttonClicked: true
    })
  }

  showSearch = (e) => {
    e.preventDefault();
    this.setState({
      buttonSearchClicked: true
    })
  }

  render() {
    return (
      <div>
        <Welcome />
        {this.state.buttonClicked == false ? <Play showGame={this.showGame} buttonClicked={this.state.buttonClicked} /> : null}
        {this.state.buttonSearchClicked == false ? <Search showSearch={this.showSearch} buttonSearchClicked={this.state.buttonSearchClicked} /> : null}

        {this.state.buttonClicked == true ? <Game /> : null}
        {this.state.buttonSearchClicked == true ? <SearchImages /> : null}

      </div>
    );
  }
}

export default App;
