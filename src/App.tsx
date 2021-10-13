import React, { useEffect } from 'react';
import {
  BrowserRouter as Router, Route, Switch, useLocation,
} from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Footer from './components/layout/Footer';
import Nav from './components/layout/Nav';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Experience from './components/pages/Experience';
import Home from './components/pages/Home';
import Projects from './components/pages/Projects';

const ScrollToTop: React.FC = (): null => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App: React.FC = () => (
  <>
    <Helmet>
      <html lang="en" />
      <title>Welcome to Sam&apos;s Portfolio</title>
      <meta name="Sam's portfolio site" content="A portfolio site built with React and TypeScript" />
      <meta name="theme-color" content="#E6E6FA" />
    </Helmet>
    <Router>
      <ScrollToTop />
      <Nav />
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/projects">
          <Projects />
        </Route>
        <Route path="/experience">
          <Experience />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
      <Footer />
    </Router>
  </>
);

export default App;
