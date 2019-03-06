import React, { Component } from 'react'
import SearchImages from '../components/SearchImages'
import Search from '../components/Search'
import Welcome from '../components/Welcome'
import SearchButton from '../components/SearchButton'
import Play from '../components/Play'
import Game from '../components/Game'
import $ from 'jquery'

class SearchContainer extends Component {
//This component houses other components I need and toggles the things that are rendered

  state = {
    buttonClicked: false,
    buttonSearchClicked: false,
    buttonGameClicked: false
  }

//This decides if the user clicked a button to search and helps toggle that rendering
  showSearch = (e) => {
    e.preventDefault();
    this.setState({
      buttonSearchClicked: true,
      buttonClicked: true
    })
  }

//Not in use yet, but when I have the game working allows for that to show
  showGame = (e) => {
    e.preventDefault();
    this.setState({
      buttonGameClicked: true,
      buttonClicked: true
    })
  }

//the welcome component has the header/navbar and the button to choose to search is toggled
  render() {
    return(
      <div>
        <Welcome />

        {this.state.buttonSearchClicked === false ? <SearchButton showSearch={this.showSearch} buttonSearchClicked={this.state.buttonSearchClicked} /> : null}
        {this.state.buttonSearchClicked === true ? <SearchImages /> : null}

      </div>
    )
  }



}

export default SearchContainer

//game components for later:
// {this.state.buttonGameClicked == false ? <Play showGame={this.showGame} buttonGameClicked={this.state.buttonGameClicked} /> : null}
// {this.state.buttonGameClicked == true ? <Game /> : null}
