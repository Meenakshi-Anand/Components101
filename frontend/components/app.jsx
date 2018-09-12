import React from 'react';
import {BrowserRouter,Redirect,Switch,Route} from 'react-router-dom';
import LandingPage from './information/landing_page';
import LoopingBackground from './information/loop_video_backgrounds';

const App = () => (

    <BrowserRouter>
    <Switch>
    <Route exact path="/" component={LandingPage} />
    <Route exact path="/loopingbackground" component={LoopingBackground} />
    <Redirect to="/" />
    </Switch>
    </BrowserRouter>


);

export default App;
