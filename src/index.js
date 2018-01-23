import React from 'react'
import { render } from 'react-snapshot'
import HomePage from './pages/HomePage'
import './main.css'

render(
  <HomePage />,
  document.querySelector('#root'),
)
