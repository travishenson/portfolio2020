import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.scss';

// Import pages for routing
import Home from './pages/home';
import About from './pages/about';
import Work from './pages/work';
import Resume from './pages/resume';

// Import universal components
import Topbar from './components/Topbar';
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
  return (
    <Router>
      <div className='app'>
        <Topbar />
        <Header />
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
        <Footer />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));