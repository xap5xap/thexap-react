import React from 'react';

const HomePage = () => {
  return (
 
    <div className="main">
    <div className="container tim-container">
        <div id="extras">
            <div className="space"></div>
            <div className="row">
                <div className="col-md-7 col-md-offset-0 col-sm-10 col-sm-offset-1">
                    <div className="text-center">
                        <img src="assets/img/dulau.jpg" alt="Rounded Image" className="img-rounded img-responsive img-dog"></img>
                    </div>
                </div>
                <div className="col-md-5 col-sm-12">
                                <h1 className="text-center">About thexap
                                
                                <small className="subtitle">Get to know us</small></h1>
                                <hr></hr>
                                <p>
                                Thexap offers software development services. Specifically web sites, progressive web apps and hybrid mobile apps for iOS and Android.
                                </p>
                                <p>
                                   We use the latests technologies for our projects such as ReactJS, Angular2, Angular4, Ionic2, Ionic3 to deliver the best quality in the shortest time.
                                </p>
                                <p>
                                We are committed to create beautiful easy-to-use applications based on your requirements. We are constantly innovating and learning new technologies to be able to advise and help you grow.
                                </p>
                                <p>
                                    Feel free to contacts us, we’ll be happy to help you!
                                </p>

                </div>
            </div>
        </div>
    </div>
<div className="space-30"></div>
</div>


  );
};

export default HomePage;
