import React from 'react';
import GoogleAnalyticsService from '../GoogleAnalyticsService';

class ServicesPage extends React.Component {

    componentDidMount() {
        GoogleAnalyticsService.emitCurrentPage('ServicesPage');
    }

    render() {
        return (
            <div className="main">
                <div className="container-fluid bg-3 text-center">
                    <h1 className="text-center">Servicios
                        <small className="subtitle">Como podemos ayudarte</small>
                    </h1>
                    <hr />
                    <div className="row">
                        <div className="col-sm-4">
                            <h2>Desarrollo web</h2>
                            <p>Nos encanta la web, llega a millones de personas. Es por eso que creamos sitios web rápidos, hermosos y fáciles. Nuestros sitios web tienen que ser adaptables para dispositivos móviles para crear experiencias que combinan lo mejor de la web y lo mejor de una aplicación nativa. Creemos que todo lo que se puede construir para una aplicación nativa, se puede crear con una aplicación web, y lo mejor es que sólo inviertes en una tecnología, la web. Las aplicaciones web progresivas son nuestro objetivo actual para su sitio web.</p>
                            <img src={require('../../assets/img/web.svg')} alt="Image" width="150" height="100" />
                        </div>
                        <div className="col-sm-4">
                            <h2>Desarrollo móvil</h2>
                            <p>Creamos aplicaciones móviles para iOS y Android. En realidad se llaman aplicaciones móviles híbridas porque usan la misma tecnología para crear sitios web, pero la gente puede instalarla desde AppStore o Google Play Store. La misma experiencia que una aplicación nativa, pero con la ventaja de crear un sitio web desde esa aplicación en cualquier momento. Una vez más invertir en una tecnología y tener lo mejor de ambos mundos, móviles y web.</p>
                            <img src={require('../../assets/img/mobilephone.svg')} alt="Image" width="150" height="100" />
                        </div>
                        <div className="col-sm-4">
                            <h2>Tecnologías</h2>
                            <p>Utilizamos las últimas tecnologías para crear sitios web y aplicaciones móviles. Utilizamos las mismas tecnologías que Gooogle y Facebook usan en sus proyectos.</p>
                            <img src={require('../../assets/img/tools.svg')} alt="Image" width="150" height="100" />
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default ServicesPage;