import React from 'react';
import { render } from 'react-dom';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import './styles/_main.scss';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import configureStore from './store/index';
import AppRoute from './routes/AppRoute';
import { onAuthStateSuccess, onAuthStateFail } from './actions/authActions';
import { BrowserRouter } from 'react-router-dom';
import firebaseInstance from './firebase/firebase';
import { Toaster } from 'react-hot-toast';

const { store, persistor } = configureStore();

const AppRoot = () => (
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={<div>Loading...</div>} persistor={persistor}>
        <BrowserRouter>
          <Toaster />
          <AppRoute />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);

if (window.navigator.onLine) {
  // Render the preloader on initial load
  render(<div>Loading...</div>, document.getElementById('root'));

  firebaseInstance.auth.onAuthStateChanged((user) => {
    if (user) {
      store.dispatch(onAuthStateSuccess(user));
    } else {
      store.dispatch(onAuthStateFail('Failed to authenticate'));
    }

    render(<AppRoot />, document.getElementById('root'));
  });
} else {
  render(
    <div>
      <h2> No internet connection.</h2>
    </div>,
    document.getElementById('root')
  );
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
