import React from 'react'
import PropTypes from 'prop-types'
import { Typography } from 'material-ui'
import { withStyles } from 'material-ui/styles'
import advicesIcon from './icons/ico-advices.svg'
import eventsIcon from './icons/ico-events.svg'
import monumentsIcon from './icons/ico-monuments.svg'
import restaurantsIcon from './icons/ico-restaurants.svg'
import shoppingIcon from './icons/ico-shopping.svg'
import timeIcon from './icons/ico-time.svg'
import transportsIcon from './icons/ico-transports.svg'
import weatherIcon from './icons/ico-weather.svg'

const styles = theme => ({
  features: {
    margin: `${theme.spacing.unit * 12}px 25px ${theme.spacing.unit * 16}px`,
  },
  '@media (min-width: 640px)': {
    features: {
      margin: `${theme.spacing.unit * 12}px 11% ${theme.spacing.unit * 16}px`,
    },
  },
  titleWrapper: {
    display: 'flex',
  },
  title: {
  },
  hr: {
    flex: 1,
    marginLeft: '3.2ch',
    backgroundColor: '#e4e4e4',
    height: '1px',
    transform: 'translateY(0.8em)',
  },
  list: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    margin: '0 -2ch',
    '> *:empty': {
      height: 0,
    },
  },
  feature: {
    width: 256,
    borderStyle: 'solid',
    borderColor: 'white',
    borderWidth: '3.7ch 2ch 0',
    borderBottom: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
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
    backgroundColor: theme.palette.primary.main,
    userSelect: 'none',
  },
  featureIcon: {
  },
  featureText: {
    paddingLeft: 17,
    fontWeight: 'bold',
    flex: 1,
  },
})

const Features = ({ classes }) =>
  <div className={classes.features}>
    <div className={classes.titleWrapper}>
      <Typography type="subheading" gutterBottom className={classes.title}>
        All the useful information
      </Typography>
      <div className={classes.hr} />
    </div>
    <div className={classes.list}>
      <div className={classes.feature}>
        <div className={classes.featureIconWrapper}>
          <img className={classes.featureIcon} src={weatherIcon} />
        </div>
        <Typography type="body1" className={classes.featureText}>
          Weather forecasts
        </Typography>
      </div>
      <div className={classes.feature}>
        <div className={classes.featureIconWrapper}>
          <img className={classes.featureIcon} src={timeIcon} />
        </div>
        <Typography type="body1" className={classes.featureText}>
          Waiting time everywhere
        </Typography>
      </div>
      <div className={classes.feature}>
        <div className={classes.featureIconWrapper}>
          <img className={classes.featureIcon} src={advicesIcon} />
        </div>
        <Typography type="body1" className={classes.featureText}>
          Blogger's advices
        </Typography>
      </div>
      <div className={classes.feature}>
        <div className={classes.featureIconWrapper}>
          <img className={classes.featureIcon} src={shoppingIcon} />
        </div>
        <Typography type="body1" className={classes.featureText}>
          Shopping
        </Typography>
      </div>
      <div className={classes.feature}>
        <div className={classes.featureIconWrapper}>
          <img className={classes.featureIcon} src={restaurantsIcon} />
        </div>
        <Typography type="body1" className={classes.featureText}>
          Street food & restaurants
        </Typography>
      </div>
      <div className={classes.feature}>
        <div className={classes.featureIconWrapper}>
          <img className={classes.featureIcon} src={monumentsIcon} />
        </div>
        <Typography type="body1" className={classes.featureText}>
          Monuments
        </Typography>
      </div>
      <div className={classes.feature}>
        <div className={classes.featureIconWrapper}>
          <img className={classes.featureIcon} src={eventsIcon} />
        </div>
        <Typography type="body1" className={classes.featureText}>
          Events
        </Typography>
      </div>
      <div className={classes.feature}>
        <div className={classes.featureIconWrapper}>
          <img className={classes.featureIcon} src={transportsIcon} />
        </div>
        <Typography type="body1" className={classes.featureText}>
          Transports
        </Typography>
      </div>
      <div className={classes.feature}/>
      <div className={classes.feature}/>
      <div className={classes.feature}/>
      <div className={classes.feature}/>
      <div className={classes.feature}/>
    </div>
  </div>

Features.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Features)
