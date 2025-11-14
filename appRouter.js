import React from 'react';
import { Router } from 'react-router-dom';
import {
    Route,
    Switch,
    Redirect
  } from 'react-router-dom';

import PageModule from './components/modules/page';
import SignIn from './components/modules/pages/auth/signin/signin';
import Forgot from './components/modules/pages/auth/signin/forgot';
import Reset from './components/modules/pages/auth/signin/resetpswd';
import Setup from './components/modules/pages/Setup/setup';




const AppRouter = (props) => (
    <Router history={props.history}>
      <Switch>
        <Route exact path="/" component={SignIn}/>
        <Route path="/zeronsec" component={PageModule}/>
        <Route path="/setup" component={Setup}/>

        <Route path="/forgot" component={Forgot}/>
        <Route exact strict path="/forgotpsw/:token?" component={Reset}/>
        <Route exact strict path="/resetpsw/:token?" component={Reset}/>
        <Redirect to="/"/>
      </Switch>
    </Router>
);

export default AppRouter;
