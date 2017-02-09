import React, { Component } from 'react'

import ActorsApi from '../service/movies-api.js'

import { Container, List, Image, Rating, Icon } from 'semantic-ui-react'

import { browserHistory } from 'react-router'

class Actors extends Component {

    constructor(props) {
        super(props);
        this.state = { 
            actors: [] 
        };

        var that = this;

        ActorsApi.actorsList().then(function(actors) {
            that.setState({
                actors: actors
            })
        });

    }

    render() {
        var actors = this.state.actors.map(
            actor => <div key={actor.id}>{actor.name}</div>
        );

        return <List items={actors} divided relaxed verticalAlign="middle" />
    }

}

export default Actors;