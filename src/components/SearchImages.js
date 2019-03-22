import React, { Component } from 'react';
import $ from 'jquery'

import Search from './Search'
import moon from './moon.jpg'


export default class SearchImages extends Component {
  //Images come to the state and are stored there when a search is done, after the API is called
  state = {
    images: []
  }

//The NASA API is called and then the results go to the state
  fetchImages = (query = "") => {

      $.ajax({
        url: `https://images-api.nasa.gov/search?q=${query}`
      }).then(json => {
        this.setState({ images: json.collection.items })
      })


  }

//this function helps when presenting the cards - if the title and description are the same, it doesn't show the description
  sameContent = (a, b) => {
    if (a === b) {
      return null
    } else {
      return b
    };
  }

// This function determines if an image is present in the object and if not, renders a default image
  hasImage = (result) => {
    if (typeof result !== 'undefined') {
      return result[0].href
    } else {
      return moon
    }
  }

// This determines if the title exists, much like the function above
  hasContent = (result) => {
    if (typeof result !== 'undefined') {
      return result[0].title
    } else {
      return "No content"
    }
  };

// This determines the HTML to render and the card structure, mapping the images from the state onto each card
  getResults = (query) => {
    if (this.state.images.length > 0) {
      return this.state.images.map(image =>
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
        </div>)
    } else {
      return this.noResults()
    }
  }

  //A function to help show a message when the search term returns no results
  noResults = () => {
    return <div className="noresult">no results</div>
  };

  render() {
    //The Search field is rendered and the results are presented.
    return (
      <div className="searchstuff">
        <Search fetchImages={this.fetchImages}/>
        {this.getResults()}
      </div>
    );
  };

//The component has loaded and the functions are called - was using this before but not currently
  componentDidMount(){

  }


}
