import React, { Component } from 'react';
import _ from 'lodash';
import prefixUrl from 'prefix-url';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="RootSectionEjector--App">
        <header className="RootSectionEjector--App-header">
          <img src={logo} className="RootSectionEjector--App-logo" alt="logo" />
          <h1 className="RootSectionEjector--App-title">Welcome to React: {typeof _}</h1>
        </header>
        <p className="RootSectionEjector--App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
