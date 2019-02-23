import React, { Component } from 'react';
import $ from 'jquery'

export default class Game extends Component {
  state = {
    image: ""
  }

  componentDidMount(){
    // const spaceSearch = ["moon", "earth", "jupiter", "saturn", "pluto", "mars", "venus"]
    // let randomSpaceSearch = spaceSearch[random(spaceSearch.length)]

    const url = "https://images-api.nasa.gov/search?q="

    //sending the call to the NASA API
    this.setState({image: 'https://images-assets.nasa.gov/image/PIA01973/PIA01973~thumb.jpg'
        // $.ajax({
        //   url: url + "saturn",
        //   type: "GET",
        //   dataType : "json",
        // }).done(function(json){
        //   // //similar with the search function above, we need to parse out certain things from the results first
        //   // let listlen = json.collection.items.length
        //   // //select a random number for the index I'll use to choose the result
        //   // let randomNum = random(listlen)
        //   // //get the random result as the answer
        //   // let randomItem = json.collection.items[randomNum]
        //   // //get that result's photo
        //   const imageres = json.collection.items[0].links[0].href
        //   debugger
        //   return imageres
        // })

      })

  }

  render() {

    return (
      <img src={this.state.image}></img>
    );
  }
}
