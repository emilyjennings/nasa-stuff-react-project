import React, { Component } from 'react';
import $ from 'jquery'

class SearchForm extends Component {

  state = {
    query: ""
  }

  // This lets the SearchImages component know to use the query here for the search action
  handleSubmit = event => {
    event.preventDefault()
    this.props.fetchImages(this.state.query)
  }

// Renders a form to search and submits a query to the state
  render() {
    return (
      <div className="searchcontent">
        <h3 className="searchtext">Enter a Celestial Term:</h3>
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.query} onChange={event => this.setState({query: event.target.value})} />
        </form>
      </div>
    )
  };
}

export default SearchForm
