import React from 'react';
import PropTypes from 'prop-types';
import Header from './common/Header';

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id="navbar-full">
                <Header />
                {this.props.children}
            </div>
        );
    }


}

App.propTypes = {
    children: PropTypes.element
};

export default App;
