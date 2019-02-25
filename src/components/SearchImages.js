import React, { Component } from 'react';
import $ from 'jquery'

export default class SearchImages extends Component {
  state = {
    image: "",
    desc: "",
    title: ""
  }

  componentDidMount(){
    // const spaceSearch = ["moon", "earth", "jupiter", "saturn", "pluto", "mars", "venus"]
    // let randomSpaceSearch = spaceSearch[random(spaceSearch.length)]

    const url = "https://images-api.nasa.gov/search?q="
    let query = 'saturn'

    //sending the call to the NASA API
      fetch(`https://images-api.nasa.gov/search?q=${query}`)
      .then(res => res.json())
      .then(({data}) => {
        this.setState({ image: data.collection.items[0].links[0].href })
      })


        // $.ajax({
        //   url: url + "saturn",
        //   type: "GET",
        //   dataType : "json",
        // }).done(function(json){
        //   let imageres = json.collection.items[0].links[0].href
        // }).then(json => {
        //   this.setState({ image: json.collection.items[0].links[0].href })
        // })

        $.ajax({
          url: url + "pluto",
          type: "GET",
          dataType : "json",
        }).done(function(json){

        }).then(json => {
          this.setState({ image: json.collection.items[0].links[0].href })
          this.setState({ desc: json.collection.items[0].data[0].description })
          this.setState({ title: json.collection.items[0].data[0].title })
        });


      // }).this.setState({ image: imageVariable })

  }

  render() {

    return (

      <div class="image">
        <h1>{this.state.title}</h1>
        <img src={this.state.image}></img>
        <div>{this.state.desc}</div>
      </div>

    );
  }
}
