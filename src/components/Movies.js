import React, { Component } from 'react'

import MoviesApi from '../service/movies-api.js'

import { List, Image, Rating, Icon } from 'semantic-ui-react'

import { browserHistory } from 'react-router'

class Movies extends Component {

    constructor(props) {
        super(props);
        this.state = { 
            movies: [] 
        };

        var that = this;

        MoviesApi.moviesList().then(function(movies) {
            that.setState({
                movies: movies
            })
        });

    }

    handleSelection = (movieId) => {
        return e =>
            browserHistory.push('/movies/' + movieId);
    }

    render() {
        var _movies = this.state.movies.map(mov => 
             (<List.Item key={mov.id} onClick={this.handleSelection(mov.id)}>
                <Image avatar src={mov.thumbnail_uri} />
                <List.Content>
                    <List.Header>{mov.name} <Icon name="star"/> {mov.rating}/10</List.Header>
                </List.Content>
            </List.Item>)
            );

        return (<div>
            
            <List divided selection relaxed verticalAlign='middle'>
                {_movies}
            </List>

        </div>);
    }
}

export default Movies;