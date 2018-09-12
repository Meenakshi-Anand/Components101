import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Header extends Component {
    render () {
        return (
            <header className="header">
              <section>
                <Link to={`/`}>
                  <section><img></img></section>
                  <h2>Components 101</h2>
                </Link>
                <div>
                  <Link>Github</Link>
                  <Link>Linked In</Link>
                </div>
              </section>
            </header>
        );
    }
}

export default Header;
