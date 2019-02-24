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
        $.ajax({
          url: url + "saturn",
          type: "GET",
          dataType : "json",
        }).done(function(json){
          let imageres = json.collection.items[0].links[0].href
        }).then(json => {
          this.setState({ image: json.collection.items[0].links[0].href })
        })



      // }).this.setState({ image: imageVariable })

  }

  render() {

    return (
      <div class="namegame" id="namegameimage">
        <img src={this.state.image}></img>
      </div>
    );
  }
}
