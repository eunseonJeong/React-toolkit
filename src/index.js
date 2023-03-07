import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import { store } from "../src/reducer/config/configStore"
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App>
      <Router></Router>
    </App>
  </Provider>
);