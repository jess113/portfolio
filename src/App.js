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
import VizCAD from './projects/VizCAD';
import LinkNow from './projects/LinkNow';
import SPM from './projects/SPM';
import HCDE from './projects/HCDE';
import Art from './projects/Art';
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
              <Portfolio />
              <Resume />
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
          <Route exact={true} path='/VizCAD' render={() => (
            <div className="App">
              <VizCAD />
              <ProjectFooter />
            </div>
          )}/>
          <Route exact={true} path='/SPM' render={() => (
            <div className="App">
              <SPM />
              <ProjectFooter />
            </div>
          )}/>
          <Route exact={true} path='/HCDE' render={() => (
            <div className="App">
              <HCDE />
              <ProjectFooter />
            </div>
          )}/>
          <Route exact={true} path='/Art' render={() => (
            <div className="App">
              <Art />
              <ProjectFooter />
            </div>
          )}/>
          </Switch>
        </div>
      </HashRouter>
    );
  }
}

export default App;
