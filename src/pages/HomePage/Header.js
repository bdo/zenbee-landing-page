import React from 'react'
import PropTypes from 'prop-types'
import { Button, Typography } from 'material-ui'
import { withStyles } from 'material-ui/styles'
import logo from './images/zenbee-logo.png'
import beeLeft from './images/bee-left.svg'
import beeRight from './images/bee-right.svg'
import bee from './images/bee.png'
import { scroller } from 'react-scroll'

const scrollToForm = () => {
  scroller.scrollTo('query-form', {
    offset: -50,
    duration: 800,
    delay: 0,
    smooth: 'easeInOutQuart',
  })
}

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
      left: 0,
      width: '25%',
    },
    beeRight: {
      display: 'block',
      position: 'absolute',
      left: '75%',
      width: '25%',
    },
  },
})

const Header = ({ classes }) =>
  <div className={classes.header}>
    <div className={classes.logoSection}>
      <img src={logo} height={45} alt="Zenbee logo" />
    </div>
    <img src={bee} className={classes.bee} alt="" />
    <Typography type="title" gutterBottom className={classes.titleSection}>
      <img src={beeLeft} className={classes.beeLeft} alt="" />
      <img src={beeRight} className={classes.beeRight} alt="" />
      Get the most
      <br />
      out of your trip
    </Typography>
    <Typography type="headline" gutterBottom className={classes.subheading}>
      Your daily activities always
      <br />
      optimized for you.
    </Typography>
    <div className={classes.button}>
      <Button raised color="primary" onClick={scrollToForm}>
        Start your trip
      </Button>
    </div>
  </div>

Header.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Header)
