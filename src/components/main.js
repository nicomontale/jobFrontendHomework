import React from 'react';
import LandingPage from './landingpage';
import {Switch, Route} from 'react-router-dom';

import Project from './project';
import Resume from './resume';
import Contact from './Contact';
import Login from './Login';
import PrivateArea from './PrivateArea';
const Main =()=>(
    <Switch>
    <Route exact path="/" component={LandingPage}/>
    <Route exact path="/project" component={Project}/>
    <Route exact path="/resume" component={Resume}/>
    <Route exact path="/contact" component={Contact}/>
    <Route exact path="/login" component={Login}/>
    <Route exact path="/privateArea" component={PrivateArea}/>
    </Switch>

)
export default Main;