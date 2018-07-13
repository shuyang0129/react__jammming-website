import React from 'react';
import './PlayList.css';
import TrackList from '../TrackList/TrackList';

class PlayList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};

        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleClick(selectedItem) {
        this.props.onClick(selectedItem);
    }

    handleChange(e) {
        e.preventDefault();
        this.props.onChange(e.target.value);
    }
    
    render() {
        return (
            <div className="Playlist">
                <input value={this.props.playListTitle}
                    onChange={this.handleChange} />
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