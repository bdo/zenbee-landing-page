import React from 'react'
import PropTypes from 'prop-types'
import { Typography } from 'material-ui'
import { withStyles } from 'material-ui/styles'
import Feature, { EmptyFeature } from './Feature'
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
    margin: `${theme.spacing.unit * 5}px 25px ${theme.spacing.unit * 5}px`,
  },
  '@media (min-width: 640px)': {
    features: {
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
  { icon: timeIcon, text: 'Waiting time everywhere' },
  { icon: advicesIcon, text: 'Blogger\'s advices' },
  { icon: eventsIcon, text: 'Events' },
  { icon: restaurantsIcon, text: 'Street food & restaurants' },
  { icon: monumentsIcon, text: 'Monuments' },
  { icon: shoppingIcon, text: 'Shopping' },
  { icon: transportsIcon, text: 'Transports' },
]

const Features = ({ classes }) =>
  <div className={classes.features}>
    <div className={classes.titleWrapper}>
      <Typography type="subheading" gutterBottom className={classes.title}>
        All the useful information
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
        Array.from(Array(4).keys()).map(() => <EmptyFeature />)
      }
    </div>
  </div>

Features.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Features)
