import React from 'react';
import Tech from '../layout/Tech';
import ContactForm from '../ui/ContactForm';
import About from './About';
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
    <ContactForm />
  </>
);

export default Home;
