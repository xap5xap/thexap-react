import React, { PropTypes } from 'react';
import ProjectCard from './ProjectCard';

const ProjectList = ({ projects }) => {
    return (
        <div className="container-fluid text-center bg-grey">
            <h1 className="text-center">Portfolio
            </h1>
            <hr />
            {projects.map(project =>
                <ProjectCard key={project.id} project={project} />
            )}
        </div>
    );
};

ProjectList.propTypes = {
    projects: PropTypes.array.isRequired
};

export default ProjectList;
