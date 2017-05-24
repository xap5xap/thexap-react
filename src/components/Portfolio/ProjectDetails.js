import React, { PropTypes } from 'react';

const ProjectDetails = ({ project }) => {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-sm-12 col-xs-12">
                    <div className="panel panel-default text-center">
                        <div className="panel-heading">
                            <h1>{project.name}</h1>
                        </div>
                        <div className="panel-body">
                            <p><strong>Technology used in this {project.type}</strong></p>
                            {
                                project.technology.map(technology =>
                                    <p key={technology}>{technology}</p>
                                )
                            }
                        </div>
                        <div className="panel-footer">
                            <a target="_blank" href={project.visitUrl}>Visit site</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

ProjectDetails.propTypes = {
    project: PropTypes.object.isRequired
};

export default ProjectDetails;