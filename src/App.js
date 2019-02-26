import React, { useState, useEffect } from 'react';
import './App.css';
import {addChallenge, getChallenge} from './firebase/firebase';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore'
import AppRouter from './component/AppRouter';
// component 

const store = configureStore();
const App = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
)

export default App;
