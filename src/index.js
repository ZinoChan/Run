import React from 'react';
import {render} from 'react-dom';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import './styles/_main.scss';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import configureStore from './store/index';
import AppRoute from './routes/AppRoute';

const {store, persistor} = configureStore();


render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={""} persistor={persistor}>
        <AppRoute/>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
