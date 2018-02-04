import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import ScrollToTop from 'components/ScrollToTop'
import * as firebase from 'firebase'
import './main.css'
import Routes from './routes'

firebase.initializeApp({
  apiKey: "AIzaSyDX96Ow2KbAK-hY-DysBVWkoA7Kf_3w-IA",
  authDomain: "zenbee-57e70.firebaseapp.com",
  databaseURL: "https://zenbee-57e70.firebaseio.com",
  projectId: "zenbee-57e70",
  storageBucket: "zenbee-57e70.appspot.com",
  messagingSenderId: "633748144454"
});

render(
  <Router>
    <ScrollToTop>
      <Routes />
    </ScrollToTop>
  </Router>,
  document.querySelector('#root'),
)
