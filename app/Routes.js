import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from "react-router"


import Main from './components/Main';
import Dashboard from './components/dashboard/Dashboard';
import LogReading from './components/dashboard/LogReading';
import Settings from './components/dashboard/Settings';

export default (

        <Route path="/" component={Main}>
            <IndexRoute component={Dashboard} />
            <Route path="/log" component={LogReading}/>
            <Route path="/settings" component={Settings}/>
        </Route>

);