import React from 'react'
import PropTypes from 'prop-types'
import { Typography } from 'material-ui'
import { withStyles } from 'material-ui/styles'
import Feature, { EmptyFeature } from './Feature'
import advicesIcon from 'theme/icons/ico-advices.svg'
import eventsIcon from 'theme/icons/ico-events.svg'
import monumentsIcon from 'theme/icons/ico-monuments.svg'
import restaurantsIcon from 'theme/icons/ico-restaurants.svg'
import shoppingIcon from 'theme/icons/ico-shopping.svg'
import timeIcon from 'theme/icons/ico-time.svg'
import transportsIcon from 'theme/icons/ico-transports.svg'
import weatherIcon from 'theme/icons/ico-weather.svg'

const styles = theme => ({
  root: {
    margin: `${theme.spacing.unit * 5}px 25px ${theme.spacing.unit * 5}px`,
  },
  '@media (min-width: 640px)': {
    root: {
      margin: `${theme.spacing.unit * 12}px 11% ${theme.spacing.unit * 12}px`,
    },
  },
  titleWrapper: {
    marginBottom: '1.5rem',
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
  },
})

const features = [
  { icon: weatherIcon, text: 'Weather forecasts' },
  { icon: timeIcon, text: 'Waiting time' },
  { icon: advicesIcon, text: 'Local blogs advice' },
  { icon: eventsIcon, text: 'Events' },
  { icon: restaurantsIcon, text: 'Restaurants' },
  { icon: monumentsIcon, text: 'Monuments' },
  { icon: shoppingIcon, text: 'Shopping' },
  { icon: transportsIcon, text: 'Transport' },
]

const Features = ({ classes }) =>
  <div className={classes.root}>
    <div className={classes.titleWrapper}>
      <Typography type="subheading" gutterBottom className={classes.title}>
        All aspects taken into account
      </Typography>
      <div className={classes.hr} />
    </div>
    <div className={classes.list}>
      {features.map(({ icon, text }) =>
        <Feature key={text} icon={icon} text={text} />
      )}
      {
        /*
         * Add extra empty features (with 0 height) to keep
         * consistent number of columns so that features are
         * properly vertically aligned
         */
        Array.from(Array(4).keys()).map(key => <EmptyFeature key={key} />)
      }
    </div>
  </div>

Features.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Features)
