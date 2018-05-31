import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import store from './store';

import './index.css';

// import Art from './components/art';
import RegisterUserForm from './components/register-form'
// import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Provider store={store}>
    <RegisterUserForm />
  </Provider>,
  document.getElementById('root')
);
