import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import store from './store';
import App from './components/app';
import './index.css';

import Art from './components/art';
// import RegisterUserForm from './components/app'
// import registerServiceWorker from './registerServiceWorker';

// import configureStore from './store';
//
// const store = configureStore;

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
