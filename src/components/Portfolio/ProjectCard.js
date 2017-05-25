import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const ProjectCard = ({ project }) => {
    return (
        <div className="col-sm-4 card-project">
            <Link to={`/project/${project.id}`}>
                <div className="thumbnail">
                    <img src={project.imgUrl} alt={project.name} />
                    <p><strong>{project.name}</strong></p>
                    <p>{project.type}</p>
                </div>
            </Link>
        </div>
    );
};

ProjectCard.propTypes = {
    project: PropTypes.object.isRequired
};

export default ProjectCard;