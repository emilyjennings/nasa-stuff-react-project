import React, { Component } from 'react';
import $ from 'jquery'

import Play from '../components/Play'

export default class Game extends Component {

  state = {
    image: "",
    item: "",
    gamePlayed: false
  }

  getGameImage = () => {
    const spaceSearch = ["moon", "earth", "jupiter", "saturn", "pluto", "mars", "venus"]
    let randomSearchItem = spaceSearch[Math.floor(Math.random()*spaceSearch.length)];

    const url = "https://images-api.nasa.gov/search?q="

    //sending the call to the NASA API
        $.ajax({
          url: url + randomSearchItem,
          type: "GET",
          dataType : "json",
        }).done(function(json){
          let imageres = json.collection.items[0].links[0].href
        }).then(json => {
          this.setState({
            image: json.collection.items[0].links[0].href,
            item: randomSearchItem
           })
        })
  }

  playGame = () => {
    const spaceWords = ["moon", "earth", "jupiter", "saturn", "pluto", "mars", "venus"]
      return spaceWords.map(word =>
        <div className="guessing">
          <button onClick={ e => this.guessChoice(e)} id={word}>{word}</button>
        </div>
      )
  }

  guessChoice = (e) => {

    this.setState({
      gamePlayed: true,
      guess: e.target.id
    })
    debugger


    if (this.state.item == e.target.id) {
      $(".namegamebutton").text("You're Right!")

    } else {
      $(".namegamebutton").text("Wrong, Try Again. Correct Answer: " + this.state.item)
    }
  }

  componentDidMount(){
    this.getGameImage()

  }

  render() {

    return (
      <div className="namegame" >
        <img src={this.state.image} id="namegameimage"></img>
        <div className="namegamebutton">{this.playGame()}</div>
        {this.state.gamePlayed === true ? "Keep Going." : null}
      </div>
    );
  }
}
