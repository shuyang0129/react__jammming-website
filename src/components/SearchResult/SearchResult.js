import React from 'react';
import './SearchResult.css';
import TrackList from '../TrackList/TrackList';

class SearchResult extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(selectedItem) {
        this.props.onClick(selectedItem);
    }

    render() {
        return (
            <div className="SearchResults">
              <h2>Results</h2>
              <TrackList 
                trackList={this.props.trackList}
                onClick={this.handleClick} >+</TrackList>
            </div>
        );
    }
}

export default SearchResult;