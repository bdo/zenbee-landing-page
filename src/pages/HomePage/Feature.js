import React from 'react'
import PropTypes from 'prop-types'
import { Typography } from 'material-ui'
import { withStyles } from 'material-ui/styles'
import InfoChip from 'components/InfoChip'

const styles = theme => ({
  infoChip: {
    backgroundImage: 'linear-gradient(144deg, #ff6666, #fe6468)',
  },
  feature: {
    width: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    '&:empty': {
      height: 0,
      border: 0,
    },
  },
  text: {
    paddingTop: '0.5rem',
    paddingBottom: '1.5rem',
    fontWeight: 'bold',
    textAlign: 'center',
    flex: 1,
  },
  '@media (min-width: 640px)': {
    feature: {
      width: '33%',
    },
  },
  '@media (min-width: 800px)': {
    feature: {
      width: '25%',
    },
  },
})

export const EmptyFeature = withStyles(styles)(
  ({ classes }) => <div className={classes.feature} />
)

EmptyFeature.propTypes = {
  classes: PropTypes.object.isRequired,
}

const Feature = ({ classes, icon, text }) =>
  <div className={classes.feature}>
    {icon && (
      <InfoChip icon={icon} className={classes.infoChip} />
    )}
    {text && (
      <Typography type="body1" className={classes.text}>
        {text}
      </Typography>
    )}
  </div>

Feature.propTypes = {
  classes: PropTypes.object.isRequired,
  icon: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
}

export default withStyles(styles)(Feature)
