import React, { Component } from 'react';
import $ from 'jquery'

import PlayAgain from './PlayAgain'

export default class Game extends Component {

//state tracks the current image from the api, the item trhe player guessed, attempts played, and whether the game has been played once
  state = {
    image: "",
    item: "",
    gamePlayed: false,
    playAgain: false,
    attempts: 0
  }

//ajax request to get the image for the game
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

//the game choices are rendered
  playGame = () => {
    const spaceWords = ["moon", "earth", "jupiter", "saturn", "pluto", "mars", "venus"]
      return spaceWords.map(word =>
        <div className="guessing">
          <button onClick={ e => this.guessChoice(e)} id={word}>{word}</button>
        </div>
      )
  }

//the player chooses one item and this function determines if it's a win
  guessChoice = (e) => {

    this.setState({
      gamePlayed: true,
      guess: e.target.id
    })

    if (this.state.item == e.target.id) {
      $(".namegamebutton").text("You're Right!")

    } else {
      $(".namegamebutton").text("Wrong, Try Again. Correct Answer: " + this.state.item)
    }


  }

  playAgain = () => {
    this.setState({
      gamePlayed: false
    })
  }

  renderGame = () => {
    return <div className="namegamebutton">{this.playGame()}</div>
  }


//ajax request after the component mounts
  componentDidMount(){
    this.getGameImage()

  }


//Renders the game image, the choices, and determines if the game is done and can be played again
  render() {
    return (
      <div className="namegame" >
        <div className="titlegame">Guess which one is associated with this image:</div>
        <img src={this.state.image} id="namegameimage"></img>
        {this.renderGame()}
        {this.state.gamePlayed ? <PlayAgain /> : null}
      </div>
    );
  }
}
