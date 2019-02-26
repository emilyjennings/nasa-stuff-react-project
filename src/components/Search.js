import React, { Component } from 'react';

export default class Search extends Component {

  state = {
    query: ""
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.fetchImages(this.state.query)
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.query} onChange={event => this.setState({query: event.target.value})} />
        </form>
      </div>
    )
  }
}
