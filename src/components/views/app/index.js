import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Header from '../../header';
import Navigation from '../../navigation';
import Home from '../home';
import './app.scss';

class App extends Component {
  render() {
    return (
      <div className="aic">
        <Header></Header>
        <Navigation></Navigation>
        <Route path="/" component={Home} />
      </div>
    );
  }
}

export default App;
