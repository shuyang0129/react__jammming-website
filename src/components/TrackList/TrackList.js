import React from 'react';
import TrackItem from '../TrackItem/TrackItem';
import './TrackList.css';

class TrackList extends React.Component {
    render() {
        return (
            <div className="TrackList">
                {this.props.trackList && this.props.trackList.map(trackItem => {
                    return <TrackItem trackItem={trackItem} />
                })}
            </div>
        );
    }
}

export default TrackList;