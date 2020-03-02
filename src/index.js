import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './index.scss';

// Import pages for routing
import Home from './pages/home';
import About from './pages/about';
import Work from './pages/work';
import Resume from './pages/resume';

// Import universal components
import Logo from './components/Logo';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <Router>
      <header>
        <Logo />
        <Navbar /> 
      </header>
      <main>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route exact path='/about'>
            <About />
          </Route>
          <Route exact path='/work'>
            <Work />
          </Route>
          <Route exact path='/resume'>
            <Resume />
          </Route>
        </Switch>
      </main>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));