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
    imgUrl: 'https://firebasestorage.googleapis.com/v0/b/xap5xap-1d8a9.appspot.com/o/thexap-images-public%2FPhotoInspirationSplash.jpg?alt=media&token=2f7715fe-ba09-4aae-8c5f-7205531e3cc0',
    visitUrl: 'https://play.google.com/store/apps/details?id=com.thexap.photoinspirationmobile'
  },
  {
    id: '2',
    name: 'Multas de tránsito',
    type: 'Mobile app',
    technology: [ "Angular2", "Ionic2", "Cordova", 'Node JS' ],
    imgUrl: 'https://firebasestorage.googleapis.com/v0/b/xap5xap-1d8a9.appspot.com/o/thexap-images-public%2Fmultas.jpg?alt=media&token=9ab08165-62cd-440f-a3a6-2c2de6535ca8',
    visitUrl: 'https://play.google.com/store/apps/details?id=com.thexap.multasapp'
  },
  {
    id: '3',
    name: 'thexap.com',
    type: 'Web site',
    technology: [ "React JS", 'Bootstrap' ],
    imgUrl: 'https://firebasestorage.googleapis.com/v0/b/xap5xap-1d8a9.appspot.com/o/thexap-images-public%2Fx_logo.jpg?alt=media&token=67407121-b27f-4736-b947-1335a9ff7410',
    visitUrl: 'https://thexap.com/'
  },
  {
    id: '4',
    name: 'UR Money',
    type: 'Web site',
    technology: [ "Angular4", "Ionic3", "Firebase", 'Node JS' ],
    imgUrl: 'https://firebasestorage.googleapis.com/v0/b/xap5xap-1d8a9.appspot.com/o/thexap-images-public%2Fur-logo.png?alt=media&token=2be6c43e-6c17-4d8a-b615-56456995d28f',
    visitUrl: 'https://web.ur.technology/r/A9wYEB'
  },
  {
    id: '5',
    name: 'City knots',
    type: 'Mobile app',
    technology: [ "Angular4", "Ionic3", "Cordova"],
    imgUrl: 'https://firebasestorage.googleapis.com/v0/b/xap5xap-1d8a9.appspot.com/o/thexap-images-public%2F666.jpg?alt=media&token=b49a3270-6729-4536-b62a-5b9a054c31e2',
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
