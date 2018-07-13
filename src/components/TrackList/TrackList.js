import React from 'react';
import TrackItem from '../TrackItem/TrackItem';
import './TrackList.css';

class TrackList extends React.Component {
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
            <div className="TrackList">
                {this.props.trackList && this.props.trackList.map((trackItem, index) => {
                    return <TrackItem index={index} trackItem={trackItem} onClick={this.handleClick}>{this.props.children}</TrackItem>
                })}
            </div>
        );
    }
}

export default TrackList;