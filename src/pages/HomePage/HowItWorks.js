import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'

const styles = theme => ({
  howItWorks: {
    padding: `${14 * theme.spacing.unit}px 0`,
  },
  howItWorksTitle: {
    fontFamily: theme.typography.fontFamily,
    fontWeight: 'bold',
    fontSize: '1.6rem',
    color: 'white',
  },
  howItWorksUnderline: {
    backgroundColor: 'white',
    marginTop: '4ch',
    width: '4ch',
    height: 2,
    margin: '0 auto'
  },
})


const HowItWorks = ({ classes }) =>
  <div className={classes.howItWorks}>
    <div className={classes.howItWorksTitle}>
      How it works
    </div>
    <div className={classes.howItWorksUnderline} />
  </div>

HowItWorks.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(HowItWorks)
