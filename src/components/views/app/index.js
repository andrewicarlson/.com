import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Header from '../../header';
import Navigation from '../../navigation';
import Home from '../home';
import './app.scss';

class App extends Component {
  render() {
    return (
      <div className="aic-app">
        <Header></Header>
        <Route path="/" component={Home} />
        <Navigation></Navigation>
      </div>
    );
  }
}

export default App;
