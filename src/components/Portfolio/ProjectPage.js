import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import ProjectDetails from './ProjectDetails';
import GoogleAnalyticsService from '../GoogleAnalyticsService';

class ProjectPage extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            project: Object.assign({}, props.project)
        };

    }

    componentDidMount() {
        GoogleAnalyticsService.emitCurrentPage('ProjectPage');
        if (this.state.project.id && this.state.project.id.length > 0) {
            GoogleAnalyticsService.emitEvent('ProjectPage', `Project: ${this.state.project.name}`, 'componentDidMount()');
        }
    }


    componentWillReceiveProps(nextProps) {
        if (this.props.project.id !== nextProps.project.id) {
            GoogleAnalyticsService.emitEvent('ProjectPage', `Project: ${this.state.project.name}`, 'componentWillReceiveProps()');
            this.setState({ project: Object.assign({}, nextProps.project) });
        }
    }

    render() {
        return (
            <div className="main">
                <ProjectDetails project={this.state.project} />
            </div>
        );
    }
}

ProjectPage.propTypes = {
    project: PropTypes.object.isRequired
};

function getProjectById(projects, projectId) {
    const projectArray = projects.filter(project => project.id === projectId);
    if (projectArray.length > 0) return projectArray[0];
    return null;
}

function mapStateToProps(state, ownProps) {
    const projectId = ownProps.params.id;

    let project = {
        id: '',
        name: '',
        type: '',
        technology: [],
        imgUrl: '',
        visitUrl: ''
    };

    if (projectId && state.projects.length > 0) {
        project = getProjectById(state.projects, projectId);
    }

    return {
        project: project
    };
}

export default connect(mapStateToProps)(ProjectPage);