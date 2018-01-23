import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import withRoot from '../../theme/withRoot'
import Header from './Header'
import Pictures from './Pictures'
import Features from './Features'

const styles = () => ({
  root: {
    maxWidth: 1280,
    backgroundColor: 'white',
    minHeight: '100vh',
    overflowX: 'hidden',
  },
  '@media (min-width: 1280px)': {
    root: {
      margin: '25px auto',
      borderRadius: 20,
    },
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
