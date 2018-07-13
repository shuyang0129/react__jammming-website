import React from 'react';
import './PlayList.css';
import TrackList from '../TrackList/TrackList';

class PlayList extends React.Component {
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
            <div className="Playlist">
                <input value='New Playlist' />
                <TrackList 
                    trackList={this.props.trackList}
                    onClick={this.handleClick} >-</TrackList>
                <a 
                    className="Playlist-save"
                    onClick={this.props.onSave}>SAVE TO SPOTIFY</a>
            </div>
        );
    }
}

export default PlayList;