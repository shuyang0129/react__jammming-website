import React from 'react';
import TrackItem from '../TrackItem/TrackItem';
import './TrackList.css';

class TrackList extends React.Component {
    render() {
        return (
            <div className="TrackList">
                <TrackItem />
                <TrackItem />
                <TrackItem />
                <TrackItem />
                <TrackItem />
            </div>
        );
    }
}

export default TrackList;