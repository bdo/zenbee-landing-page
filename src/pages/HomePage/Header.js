import React from 'react'
import PropTypes from 'prop-types'
import { Button, Typography } from 'material-ui'
import { withStyles } from 'material-ui/styles'
import logo from 'theme/images/zenbee-logo.png'
import beeLeft from 'theme/images/bee-left.svg'
import beeRight from 'theme/images/bee-right.svg'
import bee from 'theme/images/bee.png'
import { scroller } from 'react-scroll'

const scrollToForm = () => {
  scroller.scrollTo('query-form', {
    duration: 800,
    delay: 0,
    smooth: 'easeInOut',
  })
}

const styles = theme => ({
  root: {
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
    fontWeight: 600,
    marginBottom: '0.75rem',
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
    subheading: {
      marginBottom: 0,
    },
    bee: {
      display: 'none',
    },
    beeLeft: {
      display: 'block',
      position: 'absolute',
      left: 0,
      width: 'calc((100% - 240px) / 3)',
    },
    beeRight: {
      display: 'block',
      position: 'absolute',
      left: '75%',
      width: 'calc((100% - 240px) / 3)',
    },
  },
})

const Header = ({ classes }) =>
  <div className={classes.root}>
    <div className={classes.logoSection}>
      <img src={logo} height={45} alt="Zenbee logo" />
    </div>
    <img src={bee} className={classes.bee} alt="" />
    <Typography type="title" gutterBottom className={classes.titleSection}>
      <img src={beeLeft} className={classes.beeLeft} alt="" />
      <img src={beeRight} className={classes.beeRight} alt="" />
      Optimize your trip
    </Typography>
    <Typography type="headline" gutterBottom className={classes.subheading}>
      Prepare your big-city stay
      <br />
      simply and efficiently.
    </Typography>
    <div className={classes.button}>
      <Button raised color="primary" onClick={scrollToForm}>
        Start
      </Button>
    </div>
  </div>

Header.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Header)
