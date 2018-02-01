import React from 'react'
import { render } from 'react-snapshot'
import { BrowserRouter as Router } from 'react-router-dom'
import ScrollToTop from 'components/ScrollToTop'
import './main.css'
import Routes from './routes'

render(
  <Router>
    <ScrollToTop>
      <Routes />
    </ScrollToTop>
  </Router>,
  document.querySelector('#root'),
)
