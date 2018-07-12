import React, { Component } from 'react';
import './App.css';

import SearchBar from '../SearchBar/SearchBar';
import SearchResult from '../SearchResult/SearchResult';
import PlayList from '../PlayList/PlayList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResult: [],
      playList: []
    };

    this.searchSpotify = this.searchSpotify.bind(this);
  }

  searchSpotify(searchKeyword) {
    console.log('From App component', searchKeyword);
  }

  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar onClick={this.searchSpotify} />
          <div className="App-playlist">
            <SearchResult />
            <PlayList />
          </div>
        </div>
    </div>
    );
  }
}

export default App;
