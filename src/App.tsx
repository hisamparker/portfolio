import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Footer from './components/layout/Footer';
import Nav from './components/layout/Nav';
import About from './components/pages/About';
import Home from './components/pages/Home';

const App: React.FC = () => (
  <>
    <Router>
      <Nav />
      <Switch>
        <Route path="/about">
          <About />
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
