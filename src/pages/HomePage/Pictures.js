import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import withRoot from '../../withRoot'
import picture1 from './images/picture-1.jpg'
import picture2 from './images/picture-2.jpg'
import picture3 from './images/picture-3.jpg'
import picture4 from './images/picture-4.jpg'

const styles = theme => ({
  pictures: {
    padding: 0,
    marginLeft: '-5%',
    marginRight: '-5%',
    marginTop: theme.spacing.unit * 2,
    marginBottom: theme.spacing.unit * 2,
    display: 'flex',
    justifyContent: 'space-around',
  },
  '@media (min-width: 768px)': {
    pictures: {
      marginTop: theme.spacing.unit * 8,
      marginBottom: theme.spacing.unit * 8,
    },
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

const Pictures = ({ classes }) =>
  <div className={classes.pictures}>
    <div className={`${classes.picture} ${classes.picture1}`} />
    <div className={`${classes.picture} ${classes.picture2}`} />
    <div className={`${classes.picture} ${classes.picture3}`} />
    <div className={`${classes.picture} ${classes.picture4}`} />
  </div>

Pictures.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withRoot(withStyles(styles)(Pictures))
