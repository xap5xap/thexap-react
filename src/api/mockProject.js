import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const projects = [
  {
    id: '1',
    name: 'Photo Inspiration',
    type: 'Mobile app',
    technology: ["Angular2", "Ionic2", "Cordova", 'Flickr Api'],
    imgUrl: 'https://firebasestorage.googleapis.com/v0/b/xap5xap-1d8a9.appspot.com/o/thexap-images-public%2FPhotoInspirationSplash.jpg?alt=media&token=2f7715fe-ba09-4aae-8c5f-7205531e3cc0',
    visitUrl: 'https://play.google.com/store/apps/details?id=com.thexap.photoinspirationmobile',
    description: 'Mejora tu fotografía inspirandote en los mejores fotógrafos. <br/>Como fotógrafo, estás constantemente buscando inspiración en diferentes fuentes. <br/>Aquí tienes una aplicación que te permite navegar por las fotos más interesantes de Flickr. Busca fotos por día, analiza las configuraciones de la foto, tales como la apertura, la velocidad de obturación, la distancia focal, el modelo de la cámara, la lente, entre otros. No es necesario iniciar sesión en Flickr. <br/>Sólo tienes que abrir la aplicación y tienes las mejores fotos, todos los días.',
    downloadGoogle: "<a href='https://play.google.com/store/apps/details?id=com.thexap.photoinspirationmobile&pcampaignid=MKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1'><img width='350' alt='Disponible en Google Play' src='https://play.google.com/intl/en_us/badges/images/generic/es-419_badge_web_generic.png'/></a>"
  },
  {
    id: '2',
    name: 'Multas de tránsito',
    type: 'Mobile app',
    technology: ["Angular2", "Ionic2", "Cordova", 'Node JS'],
    imgUrl: 'https://firebasestorage.googleapis.com/v0/b/xap5xap-1d8a9.appspot.com/o/thexap-images-public%2Fmultas.jpg?alt=media&token=9ab08165-62cd-440f-a3a6-2c2de6535ca8',
    visitUrl: 'https://play.google.com/store/apps/details?id=com.thexap.multasapp',
    description: 'La mejor app que muestra los puntos disponibles en la licencia de conducir y las multas por citaciones por infracciones de tránsito de la agencia nacional de tránsito Ecuador ANT.<br/> Puede ingresar cualquier número de cedula para ver un reporte de la pérdida de puntos y un reporte de las citaciones que le haya puesto la ANT Ecuador debido a infracciones de tránsito. <br/>Muestra la fecha de caducidad de la licencia y el tipo de licencia que posee.',
    downloadGoogle: "<a href='https://play.google.com/store/apps/details?id=com.thexap.multasapp&pcampaignid=MKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1'><img width='350' alt='Disponible en Google Play' src='https://play.google.com/intl/en_us/badges/images/generic/es-419_badge_web_generic.png'/></a>"
  },
  {
    id: '3',
    name: 'thexap.com',
    type: 'Web site',
    technology: ["React JS", 'Bootstrap'],
    imgUrl: 'https://firebasestorage.googleapis.com/v0/b/xap5xap-1d8a9.appspot.com/o/thexap-images-public%2Fx_logo.jpg?alt=media&token=67407121-b27f-4736-b947-1335a9ff7410',
    visitUrl: 'https://thexap.com/',
    description: 'Thexap ofrece servicios de desarrollo de software. Específicamente sitios web, aplicaciones web progresivas y aplicaciones móviles para iOS y Android.<br/> Utilizamos las últimas tecnologías para nuestros proyectos como para ofrecer la mejor calidad en el menor tiempo posible. Estamos comprometidos a crear hermosas aplicaciones fáciles de usar basadas en sus requerimientos. Estamos constantemente innovando y aprendiendo nuevas tecnologías para poder asesorar y ayudarle a crecer.'
  },
  {
    id: '4',
    name: 'UR Money',
    type: 'Web site',
    technology: ["Angular4", "Ionic3", "Firebase", 'Node JS'],
    imgUrl: 'https://firebasestorage.googleapis.com/v0/b/xap5xap-1d8a9.appspot.com/o/thexap-images-public%2Fur-logo.png?alt=media&token=2be6c43e-6c17-4d8a-b615-56456995d28f',
    visitUrl: 'https://web.ur.technology/r/A9wYEB',
    description: 'El futuro del dinero comenzó en el 2009 con el lanzamiento de Bitcoin, la primera criptomoneda del mundo.<br/> Sin embargo, no tienes Bitcoin y probablemente nunca lo harás. Esto se debe a fallas fundamentales en el diseño de Bitcoin que nunca se pueden arreglar. <br/>UR es una criptomoneda que aborda las deficiencias de Bitcoin y cumple la promesa ofrecida por esta nueva tecnología. Lo mejor de todo, la tecnología de la criptomoneda UR le permite beneficiarse del cambio en la tecnología del dinero.'
  },
  {
    id: '5',
    name: 'City knots',
    type: 'Mobile app',
    technology: ["Angular4", "Ionic3", "Cordova"],
    imgUrl: 'https://firebasestorage.googleapis.com/v0/b/xap5xap-1d8a9.appspot.com/o/thexap-images-public%2F666.jpg?alt=media&token=b49a3270-6729-4536-b62a-5b9a054c31e2',
    visitUrl: 'https://cityknots.com/',
    description: 'Cityknots le ofrece experiencias de viaje adaptadas a sus manos, ya sea sentado en casa soñando o planeando su próximo viaje, a estar en la carretera buscando experiencias que coincidan con sus deseos.<br/> Sólo busque lugares de acuerdo a su interés personal. Tome una de nuestras populares experiencias de viaje diseñado para sus intereses, o crear sus propios viajes, nudos de la ciudad es el compañero perfecto para descubrir el mundo a la medida de sus deseos.'
  }
];

class ProjectsApi {
  static getAllProjects() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(Object.assign([], projects));
      }, delay);
    });
  }

}

export default ProjectsApi;
