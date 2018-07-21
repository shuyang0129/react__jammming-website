import React, { Component } from 'react';
import './App.css';

import SearchBar from '../SearchBar/SearchBar';
import SearchResult from '../SearchResult/SearchResult';
import PlayList from '../PlayList/PlayList';
import Spotify from '../../util/Spotify';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResultList: [],
      playList: [],
      playlistTitle: "New Playlist",
      uri: ""
    };

    this.searchSpotify = this.searchSpotify.bind(this);
    this.addToList = this.addToList.bind(this);
    this.removeFromList = this.removeFromList.bind(this);
    this.saveToSpotify = this.saveToSpotify.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  searchSpotify(searchKeyword) {
    if (searchKeyword) {
      Spotify.search(searchKeyword)
      .then(searchResultList => {
        this.setState({
          searchResultList: searchResultList
        });
      });
    }
  }

  addToList(selectedItem) {
    const playListArray = this.state.playList;
    let shouldUpdate = true
    playListArray.forEach(item => {
      if(item.id === selectedItem.id) {
        shouldUpdate = false;
      };
    });
    if (shouldUpdate) {
      playListArray.push(selectedItem);
      this.setState({
        playList: playListArray
      });
    }
  }

  removeFromList(selectedItem) {
    const playListArray = this.state.playList;
    playListArray.forEach((item, index) => {
      if(item.id === selectedItem.id) {
        playListArray.splice(index, 1);
        this.setState({
          playList: playListArray
        });
      }
    });
  }

  saveToSpotify() {
    const uris = this.state.playList.map(track => {
      return track.uri;
    });
    Spotify.savePlaylist(this.state.playlistTitle, uris);
    this.setState({
      playList: [],
      playlistTitle: "New Playlist"
    });
  }

  handleChange(playlistTitle) {
    this.setState({
      playlistTitle: playlistTitle
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
            <PlayList 
              playListTitle={this.state.playlistTitle}
              trackList={this.state.playList}
              onClick={this.removeFromList}
              onSave={this.saveToSpotify}
              onChange={this.handleChange} />
          </div>
        </div>
    </div>
    );
  }
}

export default App;
