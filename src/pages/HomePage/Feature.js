import React from 'react'
import PropTypes from 'prop-types'
import { Typography } from 'material-ui'
import { withStyles } from 'material-ui/styles'

const styles = theme => ({
  feature: {
    width: 256,
    borderStyle: 'solid',
    borderColor: 'white',
    borderWidth: '3.7ch 2ch 0',
    borderBottom: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '&:empty': {
      height: 0,
      border: 0,
    },
  },
  featureIconWrapper: {
    width: 66,
    height: 66,
    flexShrink: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    borderRadius: '50%',
    backgroundImage: 'linear-gradient(144deg, #ff6666, #fe6468)',
    userSelect: 'none',
  },
  '@media (max-width: 375px)': {
    feature: {
      width: '100%',
      borderWidth: '2.5ch 2ch 0',
    },
    featureIconWrapper: {
      width: 44,
      height: 44,
    },
    featureIcon: {
      transform: 'scale(0.75)'
    },
  },
  '@media (max-width: 530px)': {
    feature: {
      width: '100%',
    },
  },
  featureText: {
    paddingLeft: 17,
    fontWeight: 'bold',
    flex: 1,
  },
})

const Feature = ({ classes, icon, text }) =>
  <div className={classes.feature}>
    <div className={classes.featureIconWrapper}>
      <img src={icon} alt="" />
    </div>
    <Typography type="body1" className={classes.featureText}>
      {text}
    </Typography>
  </div>

Feature.propTypes = {
  classes: PropTypes.object.isRequired,
  icon: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
}

export default withStyles(styles)(Feature)
