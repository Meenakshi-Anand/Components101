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
              <div className="landing_information">
              <div>
              <h1> React </h1>
              <p>
              React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.
              </p><p>
              Declarative views make your code more predictable and easier to debug.
              </p>
              </div>
              <div>
              <h1> Component-Based </h1>
              <p>
              Build encapsulated components that manage their own state, then compose them to make complex UIs.
              </p><p>
              Since component logic is written in JavaScript instead of templates, you can easily pass rich data through your app and keep state out of the DOM.
              </p>
              </div>
              <div>
              <h1> Learn Once, Write Anywhere </h1>
              <p>
              We have put together various popular UI/UX features which are often seen in modern web applications.React along with CSS has been used to achive these features .
              </p><p>
              Come learn and build fun components with us.
              </p>
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
