import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Header from './header';
class LandingPage extends Component {
    render () {
        return (
            <div className="landing">
            <Header />
            <div className="landing_backdrop">
              <div className="landing_section1">
              <div className="landing_text">
              <h1> Components 101 </h1>
              <h4> A compilation of React components.</h4>
              <a href="#list_of_components" className="landing_button">Get Started</a>
              </div>
              </div>
              <ol id="list_of_components">
              <li><Link to={"/loopingbackground"}>Looping Background</Link></li>
              </ol>
            </div>
            </div>
        );
    }
}

export default LandingPage;
