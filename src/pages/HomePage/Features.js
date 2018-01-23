import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import withRoot from '../../withRoot'

const styles = () => ({
  informations: {

  }
})

const Features = ({ classes }) =>
  <div className={classes.informations}>
  </div>

Features.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withRoot(withStyles(styles)(Features))
