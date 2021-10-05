import { v4 as uuidv4 } from 'uuid';
import helloTutorials from '../images/samsite-flair-hello-1.png';
import cuteSpot from '../images/samsite-flair-cutespot-1.png';
import gasteroids from '../images/samsite-flair-gasteroids-1.png';

const projectsArray = [
  {
    id: uuidv4(),
    name: 'hello tutorials',
    repo: 'https://github.com/hisamparker/hello-client',
    demo: 'https://www.hellotutorials.dev',
    desc:
      'An e-commerce type site built with Next.js, GraphQL, MongoDB, and Keystone.js. Payment with Stripe, Auth with JWT webtoken, and full CRUD♡',
    img: helloTutorials,
  },
  {
    id: uuidv4(),
    name: 'cute spot',
    repo: 'https://github.com/hisamparker/ih-project-2',
    demo: 'https://cute-spot.herokuapp.com',
    desc:
      'An app to help people share their favourite spots. Built with JavaScript, Bootstrap, Express, MongoDB, and Passport♡',
    img: cuteSpot,
  },
  {
    id: uuidv4(),
    name: 'gasteroids',
    repo: 'https://github.com/hisamparker/gastroids',
    demo: 'https://hisamparker.github.io/gasteroids.github.io',
    desc:
      'A very silly game built with Canvas and JavaScript.',
    img: gasteroids,
  },
];

export default projectsArray;
