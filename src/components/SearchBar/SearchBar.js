import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchKeyword: ''
        };

        this.handleSearch = this.handleSearch.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    // handleSearch(e) {
    //     e.preventDefault();
    //     this.setState({
    //         searchKeyword: e.target.value
    //     });
    // }

    handleSearch(e) {
        e.preventDefault();
        const searchTerm = e.target.value;
        localStorage.setItem('searchTerm', searchTerm);
        console.log(localStorage.getItem('searchTerm'))
        this.setState({
            searchKeyword: localStorage.getItem('searchTerm')
        });
    }

    handleClick(e) {
        e.preventDefault();
        this.props.onClick(this.state.searchKeyword);
    }

    render() {
        return (
            <div className="SearchBar">
                <input onChange={this.handleSearch} placeholder="Enter A Song Title" />
                <a onClick={this.handleClick}>SEARCH</a>
            </div>
        );
    }
}

export default SearchBar;