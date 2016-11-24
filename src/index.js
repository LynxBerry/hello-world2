import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router';
import App from './App';
import {WelcomePage, TimeReservePage} from './App';
import './index.css';

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={WelcomePage} />
      <Route path="timereserve" component={TimeReservePage}/>
    </Route>
  </Router>
  ), document.getElementById('root')
);
