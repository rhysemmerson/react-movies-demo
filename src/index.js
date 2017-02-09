import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

import App from './App'

import Movies from './components/Movies'
import Movie from './components/Movie';

import Actors from './components/Actors';

import './index.css'

require("semantic-ui-css/semantic.min.css")

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Movies}/>
      
      <Route path="/movies/:movieId" component={Movie}/>

      <Route path="/actors" component={Actors} />
    </Route>
  </Router>),
  document.getElementById('root')
);
