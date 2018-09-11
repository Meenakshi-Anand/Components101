import React, {Component} from 'react';
import {Link} from 'react-router';
class Example extends Component {
    render () {
        return (
            <div>
              <h1> Components 101 </h1>
              <h4> Build fun components with us !</h4>
              <ol>
              <li><Link to={"/loopingbackground"}><Example /></Link></li>
              </ol>
            </div>
        );
    }
}

export default Example;
