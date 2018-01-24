import React from 'react';
import ReactDOM from 'react-dom';
//import router
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import index from './page/index'

ReactDOM.render((
    <Router history={browserHistory}>
      
      <Route onEnter={console.log('Root onEnter!')} path="/" component={index}>
      </Route>
    </Router>
),document.getElementById('root'))