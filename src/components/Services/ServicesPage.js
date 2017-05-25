import React from 'react';

class ServicesPage extends React.Component {
    render() {
        return (
            <div className="main">
                <div className="container-fluid bg-3 text-center">
                    <h1 className="text-center">Services
                        <small className="subtitle">How can we help</small>
                    </h1>
                    <hr />
                    <div className="row">
                        <div className="col-sm-4">
                            <h2>Web development</h2>
                            <p>We love the web, it reaches millions of people and that's why we create fast, beautiful easy-to-use web sites. Our web sites have to be adaptable for mobile devices to create experiences that combine the best of the web and the best of a native app. We believe that everything that can be build for a native app, you can create with a web app, and the best thing is that you only invest in one technology, the web. Progressive web apps are our current objective for your web site.</p>
                            <img src={require('../../assets/img/web.svg')} alt="Image" width="150" height="100" />
                        </div>
                        <div className="col-sm-4">
                            <h2>Mobile development</h2>
                            <p>We create mobile apps for iOS and Android. Actually they are called hybrid mobile apps because they use the same technology to create web sites, but people can install your app from the AppStore or Google Play Store. Same experience as a native app but with the advantage to create a web site from that app in no time. Again you invest in one technology and have the best of both worlds, mobile and web.</p>
                            <img src={require('../../assets/img/mobilephone.svg')} alt="Image" width="150" height="100" />
                        </div>
                        <div className="col-sm-4">
                            <h2>Technologies</h2>
                            <p>We use the latests technologies to build web sites and mobile apps. We use the same technologies and languages that Gooogle and Facebook use on their projects. We use Angular4, Ionic3 and Typescript, technologies that are used inside Google for some of their projects such as Google Analytics, Firebase, Google Cloud Platform among others. Also, We use ReactJS a framework used by Facebook for their projects. The same principle of these technologies: One framework. Mobile and desktop.</p>
                            <img src={require('../../assets/img/tools.svg')}  alt="Image" width="150" height="100" />
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default ServicesPage;