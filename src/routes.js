import React from 'react'
import { Route, Switch } from 'react-router-dom'
import withRoot from 'theme/withRoot'
import HomePage from 'pages/HomePage'
import ResultsPage from 'pages/ResultsPage'
import BetaUsersPage from 'pages/BetaUsersPage'

const Routes = () =>
  <Switch>
    <Route exact path="/" component={HomePage}/>
    <Route path="/results" component={ResultsPage}/>
    <Route path="/betaUsers" component={BetaUsersPage}/>
  </Switch>


export default withRoot(Routes)
