import React from 'react'
import { render } from 'react-snapshot'
import HomePage from './pages/home'
import './main.css'

render(
  <HomePage />,
  document.querySelector('#root'),
)
