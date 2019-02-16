import React, { Component } from 'react';
import './App.css';
import ReactDOM from 'react-dom';

import Welcome from './components/Welcome';
import NameGame from './components/NameGame';

class App extends Component {
  render() {
    return (
      <div>
        <Welcome />
        <NameGame />
      </div>
    );
  }
}

export default App;
