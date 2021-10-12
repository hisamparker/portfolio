import { v4 as uuidv4 } from 'uuid';
import {
  SiNextDotJs,
  SiReact,
  SiGraphql,
  SiTypescript,
  SiJavascript,
  SiDigitalocean,
  SiNodeDotJs,
  SiStyledComponents,
  SiMongodb,
  SiCss3,
  SiGithub,
  SiApollographql,
  SiJsonwebtokens,
  SiHeroku,
  SiMapbox,
  SiHtml5,
  SiStackoverflow,
} from 'react-icons/si';
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
      'An e-commerce type site built with Next.js, GraphQL, MongoDB, and Keystone.js. Payment with Stripe, Auth with JWT, and full CRUD♡',
    img: helloTutorials,
    tech: [
      <SiNextDotJs />,
      <SiReact />,
      <SiTypescript />,
      <SiGraphql />,
      <SiApollographql />,
      <SiStyledComponents />,
      <SiJavascript />,
      <SiJsonwebtokens />,
      <SiGithub />,
      <SiDigitalocean />,
    ],
  },
  {
    id: uuidv4(),
    name: 'cute spot',
    repo: 'https://github.com/hisamparker/ih-project-2',
    demo: 'https://cute-spot.herokuapp.com',
    desc:
      'An app to help people share their favourite spots. Built with JavaScript, Bootstrap, Express, MongoDB, and Passport♡',
    img: cuteSpot,
    tech: [
      <SiJavascript />,
      <SiNodeDotJs />,
      <SiMongodb />,
      <SiJsonwebtokens />,
      <SiGithub />,
      <SiCss3 />,
      <SiMapbox />,
      <SiHeroku />],
  },
  {
    id: uuidv4(),
    name: 'gasteroids',
    repo: 'https://github.com/hisamparker/gastroids',
    demo: 'https://hisamparker.github.io/gasteroids.github.io',
    desc:
      'My first project. A casual, desktop game built with Canvas and JavaScript. Warning, this game is mobile-UN-friendly! For me, it was a great way to lear OOP ッ',
    img: gasteroids,
    tech: [
      <SiJavascript />,
      <SiGithub />,
      <SiCss3 />,
      <SiHtml5 />,
      <SiStackoverflow />,
      <SiStackoverflow />,
      <SiStackoverflow />],

  },
];

export default projectsArray;
