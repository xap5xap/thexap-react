import React, { PropTypes } from 'react';

const ProjectDetails = ({ project }) => {
    return (
        <div className="main">
            <div className="container-fluid bg-3 text-center">
                <h1 className="text-center">{project.name}
                    <small className="subtitle">{project.type}</small>
                </h1>
                <hr />
                <img src={project.imgUrl} alt={project.name} className="img-thumbnail" />

                <div className="descripcion-proyecto" dangerouslySetInnerHTML={{ __html: project.description }}/>

                {project.downloadGoogle ? <div className="descripcion-proyecto" dangerouslySetInnerHTML={{ __html: project.downloadGoogle }}/> : <a target="_blank" href={project.visitUrl} className="btn btn-lg btn-fill btn-warning">Visita el sitio</a>}
            </div>
        </div>
    );
};

ProjectDetails.propTypes = {
    project: PropTypes.object.isRequired
};

export default ProjectDetails;