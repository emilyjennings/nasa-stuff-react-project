import React, { Component } from 'react'
import SearchImages from '../components/SearchImages'
import Search from '../components/Search'
import Welcome from '../components/Welcome'
import SearchButton from '../components/SearchButton'
import Play from '../components/Play'
import Game from '../components/Game'
import $ from 'jquery'

class SearchContainer extends Component {


  state = {
    buttonClicked: false,
    buttonSearchClicked: false,
    buttonGameClicked: false
  }


  showSearch = (e) => {
    e.preventDefault();
    this.setState({
      buttonSearchClicked: true
    })
  }

  showGame = (e) => {
    e.preventDefault();
    this.setState({
      buttonGameClicked: true
    })
  }



  render() {
    return(
      <div>
        <Welcome />

        {this.state.buttonSearchClicked == false ? <SearchButton showSearch={this.showSearch} buttonSearchClicked={this.state.buttonSearchClicked} /> : null}
        {this.state.buttonSearchClicked == true ? <SearchImages images={this.state.images} /> : null}

        {this.state.buttonGameClicked == false ? <Play showGame={this.showGame} buttonGameClicked={this.state.buttonGameClicked} /> : null}
        {this.state.buttonGameClicked == true ? <Game /> : null}

      </div>
    )
  }

  fetchNews = (query = "") => {

      $.ajax({
          url: `https://node-hnapi.herokuapp.com/news`
        }).then(json => {
          this.setState({ items: json.map( item => item ) })
        })

        //I would figure out a way to search this API with more time, but I noticed other API sources of Hacker News have more searchable options. This particular one doesn't have a lot of options in the documentaiton for searching. I'd have to maybe look at the content of each item in the results dfrom the API to see if the title, for instance, includes the query from the search.

    }

//The function to call the API is called whewn the component mounts
  componentDidMount() {
      this.fetchNews()


  }


}

export default SearchContainer
