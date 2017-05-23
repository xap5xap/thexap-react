import React, {PropTypes} from 'react';
import ProjectList from './ProjectList';

class PortfolioPage extends React.Component {
    render(){
        const {projects} = this.props;
          return ( <div className="main">
                <div className="container tim-container">
                    <div id="extras">                       
                        <ProjectList projects={projects}/>
                    </div>
                </div>
                <div className="space-30"></div>
            </div>
          );
    }
}

PortfolioPage.propTypes = {
    projects: PropTypes.array.isRequired
};

export default PortfolioPage;