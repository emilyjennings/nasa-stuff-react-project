import React, { Component } from 'react';
import './App.css';

import Welcome from './components/Welcome';
import NameGame from './components/NameGame';
import Game from './components/Game';

class App extends Component {
  state = {
    buttonClicked: false
  }

  showGame = (e) => {
    e.preventDefault();
    this.setState({
      buttonClicked: true
    })
  }
  render() {
    return (
      <div>
        {this.state.buttonClicked == false ? <Welcome showGame={this.showGame} buttonClicked={this.state.buttonClicked} /> : null}
        <NameGame />
        {this.state.buttonClicked == true ? <Game /> : null}

      </div>
    );
  }
}

export default App;
