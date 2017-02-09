import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router'

import App from './App'
import Movies from './components/Movies'

import './index.css'

require("semantic-ui-css/semantic.min.css")

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path="movies" component={Movies}/>

      {/*<Route path="movies" component={Movies}>
        <Route path="/movies/:movieId" component={Movie}/>
      </Route>
      <Route path="actors" component={Actors}>
        <Route path="/actors/:actorId" component={Actor}/>
      </Route>*/}
      {/*<Route path="*" component={NoMatch}/>*/}
    </Route>
  </Router>),
  document.getElementById('root')
);
