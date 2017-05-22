import React from 'react';
import PropTypes from 'prop-types';
import { Link, IndexLink } from 'react-router';

class App extends React.Component {
  render() {
    return (
      <div id="navbar-full">
             <div className="container">
                <nav className="navbar navbar-ct-blue navbar-transparent navbar-fixed-top" role="navigation">
                
                <div className="container">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <a href="http://creative-tim.com">
                            <div className="logo-container">
                                <div className="logo">
                                    <img src="assets/img/new_logo.png"></img>
                                </div>
                                <div className="brand">
                                    Creative Tim
                                </div>
                            </div>
                        </a>
                    </div>
                
                    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                    <ul className="nav navbar-nav navbar-right">
                            <li><IndexLink to="/">Home</IndexLink></li>
                            <li><Link to="/">Portfolio</Link></li>
                            <li><Link className="btn btn-round btn-default" to="/">Contact me</Link></li>
                    </ul>
                    </div>
                </div>
                </nav>
         </div>
         <div className="blurred-container">
            <div className="motto">
                <div>Get</div>
                <div className="border no-right-border">Sh</div><div className="border">it</div>
                <div>Done</div>
            </div>
            <div className="img-src img-src-background"></div>
            <div className="img-src blur img-src-background-blur"></div>
        </div>
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.element
};

export default App;
