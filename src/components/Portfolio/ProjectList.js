import React, {PropTypes} from 'react';
import ProjectCard from './ProjectCard';

const ProjectList = ({projects}) => {
      return (
          <div className="container-fluid text-center bg-grey">
            <h2>Portfolio</h2>
            <h4>What we have created</h4>
            {projects.map(project =>
            <ProjectCard key={project.id} project={project}/>
            )}
        </div>
      );
};

ProjectList.propTypes = {
    projects : PropTypes.array.isRequired
};

export default ProjectList;
