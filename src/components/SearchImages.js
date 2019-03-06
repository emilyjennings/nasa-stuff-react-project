import React, { Component } from 'react';
import $ from 'jquery'

import Search from './Search'
import moon from './moon.jpg'


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
              <div className="leftbox">
                <div className="image"><img src={this.hasImage(image.links)}/></div>
              </div>
              <div className="rightbox">
                <div className="title">{this.hasContent(image.data)}</div>
              </div>
              <div className="clearfix">
                <div className="bottombox">
                  <div className="desc">
                    {this.sameContent(image.data[0].title, image.data[0].description)}
                  </div>
                </div>
              </div>
              <div className="creator">
                {image.data[0].secondary_creator}
              </div>
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

  sameContent = (a, b) => {
    if (a == b) {
      return null
    }else{
      return b
    }
  }

  hasImage = (result) => {
    if (typeof result !== 'undefined') {
      return result[0].href
    }else{
      return moon
    }
  }

  hasContent = (result) => {
    if (typeof result !== 'undefined') {
      return result[0].title
    }else{
      return "No content"
    }
  }

  componentDidMount(){
    this.fetchImages()
  }


}
