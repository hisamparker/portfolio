import { v4 as uuidv4 } from 'uuid';
// import {
//   SiReact,
//   SiGraphql,
//   SiTypescript,
//   SiJavascript,
//   SiNodeDotJs,
//   SiMongodb,
//   SiCss3,
//   SiGithub,
//   SiNextDotJs,
// } from 'react-icons/si';

const tech = [
  {
    id: uuidv4(),
    name: 'React.js',
    desc:
      'My very favourite library / framework / thing about Facebook.',
    logo: 'SiReact',
  },
  {
    id: uuidv4(),
    name: 'JavaScript',
    desc:
      'Vanilla is delicious, and there is nothing wrong with being single threaded (especially when there are web APIs to help out!) Both functional and object oriented programming are fine by me♡',
    logo: 'SiJavascript',
  },
  {
    id: uuidv4(),
    name: 'Express.js',
    desc:
      'I can make a little server, write REST APIS, and npm all day.',
    logo: 'SiNodeDotJs',
  },
  {
    id: uuidv4(),
    name: 'Next.js',
    desc:
      'I miss active links, but Next is super fun to work with♡',
    logo: 'SiNextDotJs',
  },
  {
    id: uuidv4(),
    name: 'MongoDB',
    desc:
      'I&apos;ve built projects using both MongoDB and MongoDB.',
    logo: 'SiMongodb',
  },
  {
    id: uuidv4(),
    name: 'Git & GitHub',
    desc:
      'Yay version controll!',
    logo: 'SiGithub',
  },
  {
    id: uuidv4(),
    name: 'GraphQL',
    desc:
      'New to GraphQL, but very in love. My latest project was built with GraphQL and Apollo.',
    logo: 'SiGraphql',
  },
  {
    id: uuidv4(),
    name: 'TypeScript',
    desc:
      'This is the way.',
    logo: 'SiTypescript',
  },
  {
    id: uuidv4(),
    name: 'CSS',
    desc:
      'The cascade is strong with this one.',
    logo: 'SiCss3',
  },
];

export default tech;
