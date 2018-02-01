import React from 'react'
import { Route, Switch } from 'react-router-dom'
import HomePage from 'pages/HomePage'
import ResultsPage from 'pages/ResultsPage'
import withRoot from 'theme/withRoot'

const Routes = () =>
  <Switch>
    <Route exact path="/" component={HomePage}/>
    <Route exact path="/results" component={ResultsPage}/>
  </Switch>


export default withRoot(Routes)
