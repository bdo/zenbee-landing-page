import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import classnames from 'classnames'

const styles = theme => ({
  root: {
    width: 44,
    height: 44,
    flexShrink: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    borderRadius: '50%',
    userSelect: 'none',
  },
  icon: {
    transform: 'scale(0.75)'
  },
  '@media (min-width: 640px)': {
    root: {
      width: 66,
      height: 66,
    },
    icon: {
      transform: 'scale(1)'
    },
  },
})

const InfoChip = ({ className, iconClassName, classes, icon }) =>
  <div
    className={classnames(classes.root, className)}
  >
    <img
      className={classnames(classes.icon, iconClassName)}
      src={icon}
      alt=""
    />
  </div>

InfoChip.propTypes = {
  classes: PropTypes.object.isRequired,
  icon: PropTypes.string.isRequired,
}

export default withStyles(styles)(InfoChip)
