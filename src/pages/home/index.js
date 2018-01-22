import React from 'react'
import PropTypes from 'prop-types'
import Button from 'material-ui/Button'
import Typography from 'material-ui/Typography'
import { withStyles } from 'material-ui/styles'
import withRoot from '../../withRoot'
import logo from '../../theme/images/zenbee-logo.png'
import beeLeft from '../../theme/images/bee-left.png'
import beeRight from '../../theme/images/bee-right.png'
import bee from '../../theme/images/bee.png'

const styles = theme => ({
  root: {
    maxWidth: 1280,
    margin: '0 auto',
    backgroundColor: 'white',
    minHeight: '100vh',
    overflowX: 'hidden',
  },
  header: {
    textAlign: 'center',
  },
  logoSection: {
    paddingTop: theme.spacing.unit * 8,
  },
  titleSection: {
    paddingTop: theme.spacing.unit * 8,
    position: 'relative'
  },
  subheading: {
    paddingTop: theme.spacing.unit * 2,
  },
  button: {
    paddingTop: theme.spacing.unit * 3,
  },
  bee: {
    display: 'none',
  },
  beeLeft: {
    position: 'absolute',
    left: 'calc(50% - 640px)',
  },
  beeRight: {
    position: 'absolute',
    right: 'calc(50% - 402px - 5.2em)',
  },
  '@media (max-width: 768px)': {
    bee: {
      display: 'block',
      width: '60%',
      transform: 'translateY(40px)'
    },
    beeLeft: {
      display: 'none',
    },
    beeRight: {
      display: 'none',
    },
  },
})

const HomePage = ({ classes }) =>
  <div className={classes.root}>
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
  </div>

HomePage.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withRoot(withStyles(styles)(HomePage))
