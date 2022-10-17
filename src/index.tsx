import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './styles/_main.scss';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor } from './store/index';
import AppRoute from './routes/AppRoute';
import { BrowserRouter } from 'react-router-dom';
import firebaseInstance, { fuego } from './firebase/firebase';
import { Toaster } from 'react-hot-toast';
import PreLoader from '@/components/ui/PreLoader';
import store from './store/index';
import { createRoot } from 'react-dom/client';
import * as serviceWorker from './serviceWorker';
import { authSuccess, authFailed } from './reducers/authReducer';
import { isAuthenticating } from './reducers/appReducer';
import { FuegoProvider } from 'swr-firestore-v9';

const AppRoot = () => (
  <React.StrictMode>
    <FuegoProvider fuego={fuego}>
      <Provider store={store}>
        <PersistGate loading={<div>Loading...</div>} persistor={persistor}>
          <BrowserRouter>
            <Toaster />
            <AppRoute />
          </BrowserRouter>
        </PersistGate>
      </Provider>
    </FuegoProvider>
  </React.StrictMode>
);

const container = document.getElementById('root');
const root = createRoot(container!);

if (window.navigator.onLine) {
  // Render the preloader on initial load

  root.render(<PreLoader />);

  firebaseInstance.auth.onAuthStateChanged((user) => {
    if (user) {
      store.dispatch(authSuccess(user));
      store.dispatch(isAuthenticating(false));
    } else {
      store.dispatch(authFailed());
      store.dispatch(isAuthenticating(false));
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
