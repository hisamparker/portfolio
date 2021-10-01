import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Footer from './components/layout/Footer';
import Nav from './components/layout/Nav';
import Hero from './components/pages/Hero';

const App: React.FC = () => (
  <>
    <Router>
      <Nav />
      <Switch>
        <Route path="/">
          <Hero />
        </Route>
      </Switch>
      <Footer />
    </Router>
  </>
);

export default App;
