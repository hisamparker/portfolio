import { v4 as uuidv4 } from 'uuid';
import helloTutorials from '../images/hello-tutorials.png';
import cuteSpot from '../images/cute-spot.png';
import gasteroids from '../images/gasteroids.png';

const projects = [
  {
    id: uuidv4(),
    name: 'hello tutorials',
    desc:
      'An e-commerce type site built with Next.js, GraphQL, MongoDB, and Keystone.js. Payment with Stripe, Auth with JWT webtoken, and full CRUD♡',
    img: helloTutorials,
  },
  {
    id: uuidv4(),
    name: 'cute spot',
    desc:
      'An app to help people share their favourite spots. Built with JavaScript, Bootstrap, Express, MongoDB, and Passport♡',
    img: cuteSpot,
  },
  {
    id: uuidv4(),
    name: 'gasteroids',
    desc:
      'A very silly game built with Canvas and JavaScript.',
    img: gasteroids,
  },
];

export default projects;
