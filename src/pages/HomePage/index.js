import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import Header from './Header'
import Pictures from './Pictures'
import Features from './Features'
import OrangeSection from './OrangeSection'

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
    <OrangeSection />
  </div>

HomePage.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(HomePage)
