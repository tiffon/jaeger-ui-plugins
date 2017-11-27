import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();

// import reducer from './duck';
// import AcmeComponent, { mapStateToProps, getMapDispatchToProps } from './AcmeComponent';

export const formatVersion = '0.0.0';
export const scope = 'root-section';

export const menuConfig = [
  {
    label: "Acme View",
    path: "/acme"
  }
];

export const routes = [
  {
    path: "/acme",
    component: App,
    // connectToStore: {
    //   mapStateToProps,
    //   getMapDispatchToProps
    // }
  }
];

// export const reducerConfig = {
//   acme: reducer
// };

