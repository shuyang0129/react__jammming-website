import React, { Component } from 'react';
import './App.css';

import SearchBar from '../SearchBar/SearchBar';
import SearchResult from '../SearchResult/SearchResult';
import PlayList from '../PlayList/PlayList';

const searchResult = {
  title: 'Tiny Dancer',
  artist: 'Elton John',
  album: 'Madman Across The Water'
};

const searchResultList = [
searchResult,
searchResult,
searchResult,
searchResult,
searchResult,
searchResult
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResultList: [],
      playList: []
    };

    this.searchSpotify = this.searchSpotify.bind(this);
    this.addToList = this.addToList.bind(this);
  }

  searchSpotify(searchKeyword) {
    console.log('From App component', searchKeyword);
    this.setState({
      searchResultList: searchResultList
    });
  }

  addToList(selectedItem) {
    const playListArray = this.state.playList;
    playListArray.push(selectedItem);
    this.setState({
      playList: playListArray
    });
  }

  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar onClick={this.searchSpotify} />
          <div className="App-playlist">
            <SearchResult 
              trackList={this.state.searchResultList}
              onClick={this.addToList} />
            <PlayList trackList={this.state.playList} />
          </div>
        </div>
    </div>
    );
  }
}

export default App;
