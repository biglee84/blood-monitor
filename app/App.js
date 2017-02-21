import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from "react-router"


import Main from './components/Main';
import Dashboard from './components/dashboard/Dashboard';


ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/" component={Main}>
            <IndexRoute component={Dashboard} />
        </Route>
    </Router>,
  document.getElementById('app')
)
