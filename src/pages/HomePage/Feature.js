import React from 'react'
import PropTypes from 'prop-types'
import { Typography } from 'material-ui'
import { withStyles } from 'material-ui/styles'
import InfoChip from 'components/InfoChip'

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
  '@media (max-width: 375px)': {
    feature: {
      width: '100%',
      borderWidth: '2.5ch 2ch 0',
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
    {icon && <InfoChip icon={icon}/>}
    {text && (
      <Typography type="body1" className={classes.featureText}>
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
