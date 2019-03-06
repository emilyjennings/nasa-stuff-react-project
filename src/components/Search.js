import React, { Component } from 'react';
import $ from 'jquery'

class Search extends Component {

  state = {
    query: ""
  }

  //This lets the SearchImages component know to use the query here for the search action
  handleSubmit = event => {
    event.preventDefault()
    this.props.fetchImages(this.state.query)
  }

//renders a form to search and submits a query to the state
  render() {
      return (
        <div>
          <h3 className="searchtext">Enter a Celestial Term:</h3>
          <form onSubmit={this.handleSubmit}>
            <input type="text" value={this.state.query} onChange={event => this.setState({query: event.target.value})} />
          </form>
        </div>
      )
    }
}

export default Search


//Code below is fore use later if I want to use fetch instead od ajax

// fetchImages(query) {
//   const url = "https://images-api.nasa.gov/search?q="
//   $.ajax({
//     url: url + query,
//     type: "GET",
//     dataType : "json",
//   }).done(function(json){
//     let imageres = json.collection.items[0].links[0].href
//   }).then(json => {
//     this.setState({ image: json.collection.items[0].links[0].href })
//   })
//   // fetch(`https://images-api.nasa.gov/search?q=${query}`)
//   // .then(res => res.json())
//   // .then(({data}) => {
//   //
//   //   this.setState({ image: data.collection.items[0].links[0].href })
//   //   this.setState({ desc: data.collection.items[0].data[0].description })
//   //   this.setState({ title: data.collection.items[0].data[0].title })
//   // })
// }
