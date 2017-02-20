import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Route,
    Link

} from 'react-router-dom';

import Main from './components/Main';
import Home from './components/Home';





ReactDOM.render(
    <Router>
        <Route path="/" component={Main}>
            <Route path="about" component={Home}/>
        </Route>
    </Router>,
  document.getElementById('app')
)