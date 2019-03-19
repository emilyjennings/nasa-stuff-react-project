import React, { Component } from 'react'
import SearchImages from '../components/SearchImages'
import Welcome from '../components/Welcome'
import SearchButton from '../components/SearchButton'

// This component houses other components I need and toggles the things that are rendered
class SearchContainer extends Component {
  // We need a constructor for stateful class objects (as opposed to stateless functional components).
  constructor(props) {
    // This calls the constructor from React.Component, given this component's props.
    super(props)
    // The state can hold which view should show below the Welcome component.
    // We're actually going to hold off on most of that until you add more than one component here.
    this.state = { showSearch: false }
  }

  // This shows the search form when the button is clicked.
  showSearch = e => this.setState({ showSearch: true })

  // The welcome component has the header/navbar and the button to choose to search is toggled
  render() {
    return (
      <React.Fragment>
        <Welcome />

        {/* This takes advantage of "short circuit" evaluation of the && operator. */}
        {!this.state.showSearch && <SearchButton onClick={this.showSearch} />}
        {this.state.showSearch && <SearchImages />}
      </React.Fragment>
    )
  }
}

export default SearchContainer