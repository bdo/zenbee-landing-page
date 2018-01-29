import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import InfoChip from 'components/InfoChip'
import filtersIcon from './icons/ico-filters.svg'
import mapIcon from './icons/ico-map.svg'
import shareIcon from './icons/ico-share.svg'
import heartIcon from './icons/ico-heart.svg'

const styles = theme => ({
  howItWorks: {
    padding: `${4 * theme.spacing.unit}px 0 0`,
  },
  howItWorksTitle: {
    padding: `7% 0 0`,
    textAlign: 'center',
    fontFamily: theme.typography.fontFamily,
    fontWeight: 'bold',
    fontSize: '1.6rem',
    color: 'white',
  },
  howItWorksUnderline: {
    textAlign: 'center',
    backgroundColor: 'white',
    marginTop: '4ch',
    width: '4ch',
    height: 2,
    margin: '0 auto'
  },
  items: {
    margin: `${3 * theme.spacing.unit}px 25px`,
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'column',
    position: 'relative',
  },
  item: {
    margin: '1rem 0',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  dashedLine: {
    position: 'absolute',
    paddingLeft: 22,
    borderRight: '2px dashed #ffffff7f',
    top: 50,
    bottom: 50,
  },
  infoChip: {
    backgroundColor: 'white',
    boxShadow: '0 4px 10px 0 rgba(0, 0, 0, 0.1)',
    width: 44,
    height: 44,
  },
  infoChipIcon: {
    transform: 'scale(0.44)',
  },
  text: {
    fontFamily: theme.typography.fontFamily,
    fontWeight: 'bold',
    fontSize: '0.95rem',
    color: 'white',
    flex: '1 1 auto',
    paddingLeft: '1rem',
    '& br': {
      content: '" "',
      '&::after': {
        content: '" "',
      },
    },
  },
  '@media (min-width: 480px)': {
    items: {
      margin: `${7.5 * theme.spacing.unit}px 25px ${8 * theme.spacing.unit}px`,
      flexDirection: 'row',
    },
    item: {
      margin: 0,
      width: 'auto',
      flexDirection: 'column',
    },
    dashedLine: {
      paddingLeft: 0,
      paddingTop: 20,
      borderRight: 'none',
      borderBottom: '2px dashed #ffffff7f',
      top: 'auto',
      bottom: 'auto',
      left: 50,
      right: 50,
    },
    text: {
      textAlign: 'center',
      marginTop: '1.3rem',
      paddingLeft: 0,
      '& br': {
        content: 'normal',
        '&::after': {
          content: 'normal',
        },
      },
    },
  },
  '@media (min-width: 640px)': {
    items: {
      margin: `${7.5 * theme.spacing.unit}px 12% ${8 * theme.spacing.unit}px`,
    },
    infoChip: {
      width: 66,
      height: 66,
    },
    infoChipIcon: {
      transform: 'scale(0.66)',
    },
    dashedLine: {
      paddingTop: 33,
      left: '10%',
      right: '10%',
    },
  },
  '@media (min-width: 1080px)': {
    items: {
      margin: `${7.5 * theme.spacing.unit}px ${15 * theme.spacing.unit}px ${15 * theme.spacing.unit}px`,
      justifyContent: 'space-around',
    },
    infoChip: {
      width: 90,
      height: 90,
    },
    infoChipIcon: {
      transform: 'scale(0.9)',
    },
    dashedLine: {
      paddingTop: 45,
    },
  }
})

const items = [
  {
    icon: filtersIcon,
    text: <Fragment>Define your<br/>preferences</Fragment>,
  },
  {
    icon: mapIcon,
    text: <Fragment>Get your own<br/>itinerary</Fragment>,
  },
  {
    icon: shareIcon,
    text: <Fragment>Customize it <br/>& share it</Fragment>,
  },
  {
    icon: heartIcon,
    text: <Fragment>Enjoy<br/>your trip</Fragment>,
  },
]


const HowItWorks = ({ classes }) =>
  <div className={classes.howItWorks}>
    <div className={classes.howItWorksTitle}>
      How it works
    </div>
    <div className={classes.howItWorksUnderline} />
    <div className={classes.items}>
      <div className={classes.dashedLine} />
      {items.map(({ icon, text }) => (
        <div className={classes.item}>
          <InfoChip className={classes.infoChip} iconClassName={classes.infoChipIcon} icon={icon} large />
          <div className={classes.text}>{text}</div>
        </div>
      ))}
    </div>
  </div>

HowItWorks.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(HowItWorks)
