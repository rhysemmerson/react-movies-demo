import React, { Component } from 'react'

class MovieListItem extends Component {

    constructor(props) {
        super(props);

        this.state = {
            movie: props.movie
        };
    }

    render() {
        return (<div>
        <h4>{this.state.movie.name}</h4>
        </div>);
    }

}