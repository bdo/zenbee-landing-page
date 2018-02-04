import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import ScrollToTop from 'components/ScrollToTop'
import * as firebase from 'firebase'
import './main.css'
import Routes from './routes'
import config from './config'

firebase.initializeApp(config.firebase)

render(
  <Router>
    <ScrollToTop>
      <Routes />
    </ScrollToTop>
  </Router>,
  document.querySelector('#root'),
)
