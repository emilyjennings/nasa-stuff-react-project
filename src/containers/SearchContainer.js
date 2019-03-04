import React, { Component } from 'react'
import SearchImages from '../components/SearchImages'
import Search from '../components/Search'
import Welcome from '../components/Welcome'
import SearchButton from '../components/SearchButton'
import $ from 'jquery'

class SearchContainer extends Component {


  state = {
    buttonClicked: false,
    buttonSearchClicked: false
  }


  showSearch = (e) => {
    e.preventDefault();
    this.setState({
      buttonSearchClicked: true
    })
  }



  render() {
    return(
      <div>
        <Welcome />

        {this.state.buttonSearchClicked == false ? <SearchButton showSearch={this.showSearch} buttonSearchClicked={this.state.buttonSearchClicked} /> : null}
        {this.state.buttonSearchClicked == true ? <SearchImages images={this.state.images} /> : null}
      </div>
    )
  }

}

export default SearchContainer
