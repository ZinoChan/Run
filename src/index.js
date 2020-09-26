import React from 'react';
import {render} from 'react-dom';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import './styles/_main.scss';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import configureStore from './store/index';
import AppRoute from './routes/AppRoute';
import { auth } from './firebase/firebase';
import { onAuthStateSuccess, onAuthStateFail} from './actions/authActions'

const {store, persistor} = configureStore();


const AppRoot = () => (
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={""} persistor={persistor}>
        <AppRoute/>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);


if (window.navigator.onLine) {
  // Render the preloader on initial load
  //render(<Preloader />, document.getElementById('app'));
  
  auth.onAuthStateChanged((user) => {
    console.log(user);
    if (user) {
      store.dispatch(onAuthStateSuccess(user));
    } else {
      store.dispatch(onAuthStateFail('Failed to authenticate'));
    }
  
    render(<AppRoot/>, document.getElementById('root'));
  })
    
} else {
  render((
    <div className="loader">
      <h2>:( No internet connection.</h2>
    </div>
  ), document.getElementById('app'));
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
