import React from 'react'
import PropTypes from 'prop-types'
import { Button, Typography } from 'material-ui'
import { withStyles } from 'material-ui/styles'
import withRoot from '../../withRoot'
import logo from './images/zenbee-logo.png'
import beeLeft from './images/bee-left.png'
import beeRight from './images/bee-right.png'
import bee from './images/bee.png'
import picture1 from './images/picture-1.jpg'
import picture2 from './images/picture-2.jpg'
import picture3 from './images/picture-3.jpg'
import picture4 from './images/picture-4.jpg'

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
  pictures: {
    padding: 0,
    margin: '100px -5%',
    display: 'flex',
    justifyContent: 'space-around',
  },
  picture: {
    flex: '1 0 auto',
    height: 'auto',
    marginLeft: '2%',
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    borderRadius: 4,
    boxShadow: '0 10px 20px 0 rgba(0, 0, 0, 0.15)',
    content: '""',
    '&:before': {
      content: '""',
      float: 'left',
      paddingTop: '100%',
    },
  },
  picture1: {
    backgroundImage: `url(${picture1})`,
    marginLeft: 0,
  },
  picture2: {
    transform: 'translateY(30px)',
    backgroundImage: `url(${picture2})`,
  },
  picture3: {
    transform: 'translateY(14px)',
    backgroundImage: `url(${picture3})`,
  },
  picture4: {
    transform: 'translateY(46px)',
    backgroundImage: `url(${picture4})`,
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
    <div className={classes.pictures}>
      <div className={`${classes.picture} ${classes.picture1}`} />
      <div className={`${classes.picture} ${classes.picture2}`} />
      <div className={`${classes.picture} ${classes.picture3}`} />
      <div className={`${classes.picture} ${classes.picture4}`} />
    </div>
  </div>

HomePage.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withRoot(withStyles(styles)(HomePage))
