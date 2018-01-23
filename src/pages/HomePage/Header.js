import React from 'react'
import PropTypes from 'prop-types'
import { Button, Typography } from 'material-ui'
import { withStyles } from 'material-ui/styles'
import withRoot from '../../withRoot'
import logo from './images/zenbee-logo.png'
import beeLeft from './images/bee-left.png'
import beeRight from './images/bee-right.png'
import bee from './images/bee.png'

const styles = theme => ({
  header: {
    textAlign: 'center',
  },
  logoSection: {
    paddingTop: theme.spacing.unit * 3,
  },
  titleSection: {
    paddingTop: theme.spacing.unit * 4,
    position: 'relative'
  },
  subheading: {
    paddingTop: theme.spacing.unit * 2,
  },
  button: {
    paddingTop: theme.spacing.unit * 3,
  },
  bee: {
    width: '60%',
    display: 'block',
    transform: 'translateY(20px)'
  },
  beeLeft: {
    display: 'none',
  },
  beeRight: {
    display: 'none',
  },
  '@media (min-width: 768px)': {
    logoSection: {
      paddingTop: theme.spacing.unit * 8,
    },
    titleSection: {
      paddingTop: theme.spacing.unit * 8,
    },
    bee: {
      display: 'none',
    },
    beeLeft: {
      display: 'block',
      position: 'absolute',
      left: 'calc(50% - 640px)',
    },
    beeRight: {
      display: 'block',
      position: 'absolute',
      right: 'calc(50% - 400px - 5.2em)',
    },
  },
})

const Header = ({ classes }) =>
  <div className={classes.header}>
    <div className={classes.logoSection}>
      <img src={logo} height={45} alt="Zenbee logo" />
    </div>
    <img src={bee} className={classes.bee} alt="" />
    <Typography type="display1" gutterBottom className={classes.titleSection}>
      <img src={beeLeft} className={classes.beeLeft} alt="" />
      Get the most
      <br />
      out of your trip
      <img src={beeRight} className={classes.beeRight} alt="" />
    </Typography>
    <Typography type="subheading" gutterBottom className={classes.subheading}>
      Your daily activities always
      <br />
      optimized for you.
    </Typography>
    <div className={classes.button}>
      <Button raised color="primary" onClick={this.handleClick}>
        Start your trip
      </Button>
    </div>
  </div>

Header.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withRoot(withStyles(styles)(Header))
