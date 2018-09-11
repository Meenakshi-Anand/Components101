import React, {Component} from 'react';
import {Link} from 'react-router-dom';
class LandingPage extends Component {
    render () {
        return (
            <div>
              <h1> Components 101 </h1>
              <h4> Build fun components with us !</h4>
              <ol>
              <li><Link to={"/loopingbackground"}>Looping Background</Link></li>
              </ol>
            </div>
        );
    }
}

export default LandingPage;
