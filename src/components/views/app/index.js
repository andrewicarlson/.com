import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Header from '../../header';
import Navigation from '../../navigation';
import Home from '../home';
import About from '../about';
import Portfolio from '../portfolio';
import Contact from '../contact';
import './app.scss';

class App extends Component {
  render() {
    return (
      <div className="aic-app">
        <Header></Header>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Navigation></Navigation>
      </div>
    );
  }
}

export default App;
