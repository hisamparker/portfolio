import React from 'react';
import Tech from '../layout/Tech';
import About from './About';
import Contact from './Contact';
import Experience from './Experience';
import Hero from './Hero';
import Projects from './Projects';

const Home: React.FC = () => (
  <>
    <Hero />
    <About />
    <Tech />
    <Projects />
    <Experience />
    <Contact />
  </>
);

export default Home;
