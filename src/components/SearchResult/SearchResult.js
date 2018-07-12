import React from 'react';
import './SearchResult.css';
import TrackList from '../TrackList/TrackList';

class SearchResult extends React.Component {
    render() {
        return (
            <div className="SearchResults">
              <h2>Results</h2>
              <TrackList trackList={this.props.trackList} />
            </div>
        );
    }
}

export default SearchResult;