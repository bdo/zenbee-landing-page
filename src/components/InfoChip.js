import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'

const styles = theme => ({
  wrapper: {
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
    wrapper: {
      width: 44,
      height: 44,
    },
    icon: {
      transform: 'scale(0.75)'
    },
  },
})

const InfoChip = ({ classes, icon }) =>
  <div className={classes.wrapper}>
    <img src={icon} alt="" className={classes.icon}/>
  </div>

InfoChip.propTypes = {
  classes: PropTypes.object.isRequired,
  icon: PropTypes.string.isRequired,
}

export default withStyles(styles)(InfoChip)
