import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import TrackItem from '../TrackItem/TrackItem';

class App extends Component {
  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar />
          <div className="App-playlist">
            <div className="SearchResults">
              <h2>Results</h2>
              <div className="TrackList">
                <TrackItem />
                <TrackItem />
                <TrackItem />
                <TrackItem />
                <TrackItem />
              </div>
            </div>
            <div className="Playlist">
              <input value='New Playlist' />
              <div className="TrackList">
                <TrackItem />
                <TrackItem />
                <TrackItem />
              </div>
              <a className="Playlist-save">SAVE TO SPOTIFY</a>
            </div>
          </div>
        </div>
    </div>
    );
  }
}

export default App;
