import React, { Component } from 'react';
import './App.css';

import SearchBar from '../SearchBar/SearchBar';
import SearchResult from '../SearchResult/SearchResult';
import PlayList from '../PlayList/PlayList';

const searchResultList = [
  {
    id: '01',
    title: 'Tiny Dancer',
    artist: 'Elton John',
    album: 'Madman Across The Water'
  },
  {
    id: '02',
    title: 'Stronger',
    artist: 'Britney Spears',
    album: 'Oops!... I Did It Again'
  },
  {
    id: '03',
    title: 'So Emotional',
    artist: 'Whitney Houston',
    album: 'Whitney'
  },
  {
    id: '04',
    title: 'It\'s Not Right But It\'s Okay',
    artist: 'Whitney Houston',
    album: 'My Love Is Your Love'
  },
  {
    id: '05',
    title: 'Tiny Dancer',
    artist: 'Tim McGraw',
    album: 'Love Story'
  },
  {
    id: '06',
    title: 'Tiny Dancer',
    artist: 'Rockabye Baby!',
    album: 'Lullaby Renditions of Elton John'
  },
  {
    id: '07',
    title: 'Tiny Dancer',
    artist: 'The White Raven',
    album: 'Tiny Dancer'
  },
  {
    id: '08',
    title: 'Tiny Dancer - Live Album Version',
    artist: 'Ben Folds',
    album: 'Ben Folds Live'
  }
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
