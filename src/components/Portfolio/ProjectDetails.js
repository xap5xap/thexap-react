import React, { PropTypes } from 'react';

const ProjectDetails = ({ project }) => {
    return (
        <div className="main">
            <div className="container-fluid bg-3 text-center">
                <h1 className="text-center">{project.name}
                    <small className="subtitle">{project.type}</small>
                </h1>
                <hr />
                <img src={project.imgUrl} alt={project.name} style={{maxHeight: 310}} className="img-thumbnail" />

                <div className="descripcion-proyecto" dangerouslySetInnerHTML={{ __html: project.description }}/>

          {project.downloadGoogle ? <div className="descripcion-proyecto" dangerouslySetInnerHTML={{ __html: project.downloadGoogle }} /> : <a target="_blank" href={project.visitUrl} className="btn btn-lg btn-fill btn-warning">Check it out</a>}
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>

            </div>
        </div>
    );
};

ProjectDetails.propTypes = {
    project: PropTypes.object.isRequired
};

export default ProjectDetails;
