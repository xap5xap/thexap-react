import React from 'react';
import GoogleAnalyticsService from './GoogleAnalyticsService';

class NotFoundPage extends React.Component {
    componentDidMount() {
        GoogleAnalyticsService.emitCurrentPage('NotFoundPage');
    }

    render() {
        return (
            <div className="main">
                <div className="container-fluid bg-3 text-center">
                    <div className="row">
                        <div className="col-sm-12">
                            <h2>Page not found</h2>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default NotFoundPage;