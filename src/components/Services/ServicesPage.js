import React, { PropTypes } from 'react';

class ServicesPage extends React.Component {
    render() {
        return (
            <div className="main">
                <div className="container-fluid bg-3 text-center">
                    <h3>Services</h3><br />
                    <div className="row">
                        <div className="col-sm-4">
                            <p>Web development</p>
                            <img src="/assets/img/phone.svg" alt="Image" width="150" height="100" />
                        </div>
                        <div className="col-sm-4">
                            <p>Mobile development</p>
                            <img src="/assets/img/phone.svg" alt="Image" width="150" height="100" />
                        </div>
                        <div className="col-sm-4">
                            <p>I would like to help you with the ideas that you have in mind, whether you are a startup, small or medium company. I can assit you taking the best decisions for the technology that you want to apply.</p>
                            <img src="/assets/img/phone.svg" alt="Image" width="150" height="100" />
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default ServicesPage;