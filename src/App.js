import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.scss';
import ScrollToTop from './utils/scrollHook';
import { apiEndpoint } from './utils/prismic';
import 'regenerator-runtime/runtime'

// Import pages for routing
import { 
  Home, 
  About, 
  Portfolio, 
  Project, 
  Resume, 
  NotFound 
} from './pages';

// Import universal components
import Topbar from './components/Topbar';
import Header from './components/Header';
import Footer from './components/Footer';
import { Helmet } from 'react-helmet';

const App = () => {
  const repoNameArray = /([^/]+)\.cdn.prismic\.io\/api/.exec(apiEndpoint);
  const repoName = repoNameArray[1];

  return (
    <Router>
      <Helmet>
        <script async defer src={`//static.cdn.prismic.io/prismic.js?repo=${repoName}&new=true`} />
      </Helmet>
      <div className='app'>
        <ScrollToTop />
        <Topbar />
        <Header />
        <main>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/about' component={About} />
            <Route exact path='/portfolio' component={Portfolio} />
            <Route path='/portfolio/:projectId' component={Project} />
            <Route exact path='/resume' component={Resume} />
            <Route path='/*' component={NotFound} />
          </Switch>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));