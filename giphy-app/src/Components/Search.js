import React from 'react'
import './Search.css'

class Search extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            search_term: ''
        }
        this.onChangeHandler = this.onChangeHandler.bind(this)
    }

    onChangeHandler(event) {
        this.setState({
            search_term: event.target.value
        })
    }

    render() {
        return(
            <div className="search_div">
                <input
                    type="text"
                    placeholder="Enter your search terms here"
                    onChange={this.onChangeHandler} />
                <button onClick={() => this.props.searchGifs(this.state.search_term)}>Search!</button>
                <button onClick={() => this.props.searchRandom()}>Random GIF</button>
            </div>
        )
    }
}

export default Search