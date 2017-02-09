import React, { Component } from 'react'
import { browserHistory } from 'react-router'

import { Container, Header, Button, List } from 'semantic-ui-react'

import MoviesApi from '../service/movies-api.js'

class Movie extends Component {

    constructor(props) {
        super(props);

        this.state = {
            movie: {}
        };

        var that = this;
        
        MoviesApi
        .moviesRead(this.props.params.movieId)
        .then(movie => {
            that.setState({movie: movie});
        })
    }

    back(e) {
        e.preventDefault();
        browserHistory.goBack();
    }

    render() {
        var _cast = this.state.movie.cast ? this.state.movie.cast.data.map(
            (member, i) => {
                return (<div key={i}><strong>{member.actor}</strong>  <span>{member.role}</span></div>)
            }
        ) : [];

        return (<Container text>
            <Header as="h2">{this.state.movie.name}</Header>

            <p>{this.state.movie.description}</p>

            <h3>Cast</h3>
            <List items={_cast} />

            <Button onClick={this.back}>
                Back
            </Button>

        </Container>)
    }

}

export default Movie;