import React, { Component } from 'react';
import $ from 'jquery'

import Search from './Search'


export default class SearchImages extends Component {
  state = {
    images: []
  }


  render() {

    return (
      <div>
        <Search fetchImages={this.fetchImages}/>
          {this.state.images.map(image =>
            <div className="cardborder">
              <div className="image"><img src={image.links[0].href}/></div>
              <div className="title">{image.data[0].title}</div>
            </div>

          )}
      </div>
    );
  }

  fetchImages = (query = "") => {

    $.ajax({
        url: `https://images-api.nasa.gov/search?q=${query}`
      }).then(json => {
        this.setState({ images: json.collection.items })
      })


  }

  componentDidMount(){
    this.fetchImages()
  }


}
