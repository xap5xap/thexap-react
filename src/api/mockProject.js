import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const projects = [
  {
    id: '1',
    name: 'Photo Inspiration',
    type: 'mobile',
    technology: 'Angular2, Ionic2',
    imgUrl: '/assets/img/paris.jpg'
  },
  {
    id: '2',
    name: 'Multas de tránsito',
    type: 'mobile',
    technology: 'Angular4, Ionic3',
    imgUrl: '/assets/img/paris.jpg'
  },
  {
    id: '3',
    name: 'thexap.com',
    type: 'web',
    technology: 'React JS',
    imgUrl: '/assets/img/paris.jpg'
  },
  {
    id: '4',
    name: 'UR Money',
    type: 'web',
    technology: 'Angular4',
    imgUrl: '/assets/img/paris.jpg'
  },
  {
    id: '5',
    name: 'City knots',
    type: 'web',
    technology: 'Angular4, Ionic3',
    imgUrl: '/assets/img/paris.jpg'
  }
];

class ProjectsApi {
  static getAllProjects() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], projects));
      }, delay);
    });
  }

}

export default ProjectsApi;
