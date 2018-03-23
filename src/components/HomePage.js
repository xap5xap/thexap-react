import React from 'react';
import GoogleAnalyticsService from './GoogleAnalyticsService';

class HomePage extends React.Component {
  componentDidMount() {
    GoogleAnalyticsService.emitCurrentPage('HomePage');
  }

  render() {
    return (

      <div className="main">
        <div className="container tim-container">
          <div id="extras">
            <div className="row">
              <div className="col-md-12 col-sm-12">
                <h1 className="text-center">About me
                  <small className="subtitle">Xavier Pérez</small>
                </h1>
                <hr />
                <p className="text-center">
                  I am a freelance Full Stack developer</p>
                <p className="text-center">
                  Go, NodeJS, Javascript, React, React native, WebVR</p>
              </div>
            </div>
          </div>
        </div>
        <div className="space-30" />
      </div>


    );
  }
}

export default HomePage;
