import React from 'react';
import LoopingBackground from './information/loop_video_backgrounds';
const App = () => (
  <div>
    <Switch>
    <Route exact path="/" component={LandingPage} />
    <Route exact path="/loopingbackground" component={LoopingBackground} />
    <Redirect to="/" />
    </Switch>
  </div>
);

export default App;
