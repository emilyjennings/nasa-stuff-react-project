import React, { Component } from 'react';
import $ from 'jquery'

import moon from './moon.jpg'


class SearchResults extends Component {

  state = {
    images: []
  }

  //The component has loaded and the functions are called - was using this before but not currently
    componentDidMount(){
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
    getResults = (images) => {
      if (this.props.getResults.length > 0) {
        return this.props.getResults.map(image =>
          <div className="cardborder">
            <div className="leftbox">
              <div className="image"><img src={this.hasImage(image.links)} alt="" /></div>
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
        return <div className="noresult">no results yet</div>
      };

  //The Search field is rendered and the results are presented.
  render() {
    return (
      <div className="searchstuff">
        {this.getResults()}
      </div>
    );
  };


}

export default SearchResults
