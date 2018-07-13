import React from 'react';
import './TrackItem.css';

class TrackItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        const selectedItem = this.props.trackItem;
        this.props.onClick(selectedItem);
    }

    render() {
        return (
            <div className="Track">
                <div className="Track-information">
                    <h3>{this.props.trackItem.title}</h3>
                    <p>{this.props.trackItem.artist} | {this.props.trackItem.album}</p>
                </div>
                <a className="Track-action" onClick={this.handleClick}>{this.props.children}</a>
            </div>
        );
    }
}

export default TrackItem;