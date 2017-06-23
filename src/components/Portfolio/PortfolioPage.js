import React, { PropTypes } from 'react';
import ProjectList from './ProjectList';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as projectActions from '../../actions/projectActions';
import GoogleAnalyticsService from '../GoogleAnalyticsService';

class PortfolioPage extends React.Component {

  componentDidMount() {
    GoogleAnalyticsService.emitCurrentPage('PortfolioPage');
  }
  
  render() {
    const { projects } = this.props;
    return (<div className="main">
      <div className="container tim-container">
        <div id="extras">
          <ProjectList projects={projects} />
        </div>
      </div>
      <div className="space-30" />
    </div>
    );
  }
}

PortfolioPage.propTypes = {
  projects: PropTypes.array.isRequired
};

function mapStateToProps(state) {
  return {
    projects: state.projects
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(projectActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PortfolioPage);
