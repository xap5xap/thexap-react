import React from 'react';

class ProjectList extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render(){
      return (
          <div className="container-fluid text-center bg-grey">
            <h2>Portfolio</h2>
            <h4>What we have created</h4>
            <div className="row text-center">
                <div className="col-sm-4">
                    <div className="thumbnail">
                        <img src="/assets/img/paris.jpg" alt="Paris"/>
                        <p><strong>Paris</strong></p>
                        <p>Yes, we built Paris</p>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="thumbnail">
                        <img src="/assets/img/newyork.jpg" alt="New York"/>
                        <p><strong>New York</strong></p>
                        <p>We built New York</p>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="thumbnail">
                        <img src="/assets/img/sanfran.jpg" alt="San Francisco"/>
                        <p><strong>San Francisco</strong></p>
                        <p>Yes, San Fran is ours</p>
                    </div>
                </div>
            </div>
        </div>
      );
  }
}

// ProjectList.propTypes = {

// };

export default ProjectList;
