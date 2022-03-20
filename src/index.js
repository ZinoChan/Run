import React from 'react';
import { createRoot } from 'react-dom/client';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import './styles/_main.scss';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import configureStore from './store/index';
import AppRoute from './routes/AppRoute';
import { auth } from './firebase/firebase';
import { onAuthStateSuccess, onAuthStateFail } from './actions/authActions';
import { ToastContainer } from 'react-toastify';
import { BrowserRouter } from 'react-router-dom';

const { store, persistor } = configureStore();

const AppRoot = () => (
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={<div>Loading...</div>} persistor={persistor}>
        <BrowserRouter>
          <ToastContainer autoClose={2000} />
          <AppRoute />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);

const root = createRoot(document.getElementById('root'));

if (window.navigator.onLine) {
  // Render the preloader on initial load
  root.render(<div>Loading...</div>);

  auth.onAuthStateChanged((user) => {
    if (user) {
      store.dispatch(onAuthStateSuccess(user));
    } else {
      store.dispatch(onAuthStateFail('Failed to authenticate'));
    }

    root.render(<AppRoot />);
  });
} else {
  root.render(
    <div>
      <h2> No internet connection.</h2>
    </div>
  );
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
