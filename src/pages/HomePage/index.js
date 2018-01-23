import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import withRoot from '../../withRoot'
import Header from './Header'
import Pictures from './Pictures'
import Features from './Features'

const styles = () => ({
  root: {
    maxWidth: 1280,
    margin: '0 auto',
    backgroundColor: 'white',
    minHeight: '100vh',
  },
})

const HomePage = ({ classes }) =>
  <div className={classes.root}>
    <Header />
    <Pictures />
    <Features />
  </div>

HomePage.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withRoot(withStyles(styles)(HomePage))
