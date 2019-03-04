import React, { Component } from 'react';
// import React from 'react'
import $ from 'jquery'
//
// const SearchImages = props => {
//   console.log(props);
//   return (
//     <div>
//     results
//     </div>
//   )
// }
//
// export default SearchImages


export default class SearchImages extends Component {
  state = {
    images: []
  }


  render() {

    return (
      <div>
          {this.state.images.map(image =>
            <div className="cardborder">
              <div className="image"><img src={image.links[0].href}/></div>
              <div className="title">{image.data[0].title}</div>
            </div>

          )}
      </div>
    );
  }

  fetchImages = () => {

    $.ajax({
        url: 'https://images-api.nasa.gov/search?q=' + "saturn"
      }).then(json => {
        this.setState({ images: json.collection.items })
      })

      //I would figure out a way to search this API with more time, but I noticed other API sources of Hacker News have more searchable options. This particular one doesn't have a lot of options in the documentaiton for searching. I'd have to maybe look at the content of each item in the results dfrom the API to see if the title, for instance, includes the query from the search.

  }

  componentDidMount(){
    this.fetchImages()
  }


}
