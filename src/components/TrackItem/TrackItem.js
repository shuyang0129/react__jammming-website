import React from 'react';
import './TrackItem.css';

class TrackItem extends React.Component {
    render() {
        return (
            <div className="Track">
                <div className="Track-information">
                    <h3>{this.props.trackItem.title}</h3>
                    <p>{this.props.trackItem.artist} | {this.props.trackItem.album}</p>
                </div>
                <a className="Track-action">+</a>
            </div>
        );
    }
}

export default TrackItem;