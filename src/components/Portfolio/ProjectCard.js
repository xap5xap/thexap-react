import React, {PropTypes} from 'react';

const ProjectCard = ({project}) =>{
return (
    <div className="col-sm-4">
                    <div className="thumbnail">
                        <img src={project.imgUrl} alt={project.name}/>
                        <p><strong>{project.name}</strong></p>
                        <p>{project.technology}</p>
                    </div>
                </div>
);
};

ProjectCard.propTypes = {
 project: PropTypes.object.isRequired
};

export default ProjectCard;