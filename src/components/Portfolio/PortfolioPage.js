import React from 'react';
import ProjectList from './ProjectList';

class PortfolioPage extends React.Component {
    render(){
          return ( <div className="main">
                <div className="container tim-container">
                    <div id="extras">                       
                        <ProjectList/>
                    </div>
                </div>
                <div className="space-30"></div>
            </div>
          );
    }
}

export default PortfolioPage;