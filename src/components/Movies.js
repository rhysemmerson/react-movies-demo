import React, { Component } from 'react'

import MoviesApi from '../service/movies-api.js'
import MovieListItem from './MovieListItem'

class Movies extends Component {

    constructor(props) {
        super(props);
        this.state = { 
            movies: [] 
        };

        var that = this;

        MoviesApi.moviesList().then(function(movies) {
            console.dir(movies);

            that.setState({
                movies: movies
            })
        });
    }

    render() {
        var _movies = this.state.movies.map(mov => (<MovieListItem movie={mov}/>));

        return (<div>
            <h2>Movies</h2>
            {_movies}
        </div>);
    }
}

export default Movies;