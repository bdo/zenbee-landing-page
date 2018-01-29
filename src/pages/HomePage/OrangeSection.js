import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import roundShape from './images/round-shape.svg'
import HowItWorks from './HowItWorks'
import ZenbeeForm from './ZenbeeForm'

const styles = () => ({
  formWrapper: {
    position: 'relative',
    overflow: 'hidden',
  },
  formShape: {
    position: 'absolute',
    width: '100%',
    zIndex: 1,
  },
  formContent: {
    position: 'relative',
    zIndex: 2,
  },
})

const OrangeSection = ({ classes }) =>
  <div className={classes.formWrapper}>
    <img className={classes.formShape} src={roundShape} alt=""/>
    <div className={classes.formContent}>
      <HowItWorks />
      <ZenbeeForm />
    </div>
  </div>


OrangeSection.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(OrangeSection)
