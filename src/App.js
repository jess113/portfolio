import React, { Component } from 'react';
import Header from './components/header';
import About from './components/about';
import Resume from './components/resume';
import Portfolio from './components/portfolio';
import Contact from './components/contact';
import Footer from './components/footer';
import ProjectFooter from './components/projectfooter';
import './App.css';
import "react-image-gallery/styles/css/image-gallery.css";
import LinkNow from './pages/LinkNow';
//import NotFound from './pages/404';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <HashRouter basename='/'>
        <div>
          <Switch>
          <Route exact={true} path='/' render={() => (
            <div className="App">
              <Header />
              <Resume />
              <Portfolio />
              <About />
              {/*<Contact />*/}
              <Footer />
            </div>
          )} />
          <Route exact={true} path='/LinkNow' render={() => (
            <div className="App">
              <LinkNow />
              <ProjectFooter />
            </div>
          )}/>
          {/*<Route component={NotFound}/>
          <Redirect to="/404"/>*/}
          </Switch>
        </div>
      </HashRouter>
    );
  }
}

export default App;
