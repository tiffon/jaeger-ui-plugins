// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();

// import React from 'react';
// import ReactDOM from 'react-dom';

import './index.css';
import App from './App';
// import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();

// import reducer from './duck';
// import AcmeComponent, { mapStateToProps, getMapDispatchToProps } from './AcmeComponent';

export const formatVersion = '0.0.0';
export const pluginVersion = '0.0.0';
export const license = 'MIT';
export const name = 'acme-plugin';
export const description = 'description';
export const url = 'https://jaegertracing.io';
// export const scope = 'root-section';

// export function init() {
//   console.log('le init')
// }

export const menuItems = [
  {
    text: "Acme View",
    to: "/acme"
  }
];

export const routes = [
  {
    path: "/acme",
    component: App,
    connectToStore: {
    //   mapStateToProps,
    //   getMapDispatchToProps
    }
  }
];

// export const reducerConfig = {
//   acme: reducer
// };