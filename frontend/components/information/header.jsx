import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Header extends Component {
    render () {
        return (
            <header className="header">
              <section className="header_elements">
                <Link to={"/"} className="header_logo_link">
                  <section className="header_image"><img src="/app/assets/images /react_logo.png"></img></section>
                  <h2 className="header_logo">Components 101</h2>
                </Link>
                <div className="header_glinks">
                  <a href="https://github.com/Meenakshi-Anand/Components101">Github</a>
                  <a href="https://www.linkedin.com/in/meenakshi-anand-narayan-9b06b715a/">Linked In</a>
                </div>
              </section>
            </header>
        );
    }
}

export default Header;
