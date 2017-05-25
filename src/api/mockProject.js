import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const projects = [
  {
    id: '1',
    name: 'Photo Inspiration',
    type: 'Mobile app',
    technology: [ "Angular2", "Ionic2", "Cordova", 'Flickr Api' ],
    imgUrl: '/assets/img/PhotoInspirationSplash.jpg',
    visitUrl: 'https://play.google.com/store/apps/details?id=com.thexap.photoinspirationmobile'
  },
  {
    id: '2',
    name: 'Multas de tránsito',
    type: 'Mobile app',
    technology: [ "Angular2", "Ionic2", "Cordova", 'Node JS' ],
    imgUrl: '/assets/img/multas.jpg',
    visitUrl: 'https://play.google.com/store/apps/details?id=com.thexap.multasapp'
  },
  {
    id: '3',
    name: 'thexap.com',
    type: 'Web site',
    technology: [ "React JS", 'Bootstrap' ],
    imgUrl: '/assets/img/x_logo.jpg',
    visitUrl: 'https://thexap.com/'
  },
  {
    id: '4',
    name: 'UR Money',
    type: 'Web site',
    technology: [ "Angular4", "Ionic3", "Firebase", 'Node JS' ],
    imgUrl: '/assets/img/ur-logo.png',
    visitUrl: 'https://web.ur.technology/r/A9wYEB'
  },
  {
    id: '5',
    name: 'City knots',
    type: 'Mobile app',
    technology: [ "Angular4", "Ionic3", "Cordova"],
    imgUrl: '/assets/img/666.jpg',
    visitUrl: 'https://cityknots.com/'
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
