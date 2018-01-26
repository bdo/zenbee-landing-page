import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import { Button } from 'material-ui'
import { Events as ScrollEvents } from 'react-scroll'
import ZenbeeNumberInput from 'components/ZenbeeNumberInput'
import ZenbeeSelect from 'components/ZenbeeSelect'
import submitIcon from './icons/ico-submit.svg'

const styles = theme => ({
  form: {
    textAlign: 'initial',
    borderRadius: '8px 8px 0 0',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    margin: '0 25px',
    padding: theme.spacing.unit,
    '@media (min-width: 640px)': {
      margin: '0 12%',
      paddingLeft: 3 * theme.spacing.unit,
      paddingRight: 3 * theme.spacing.unit,
    },
    paddingBottom: 14 * theme.spacing.unit,
  },
  container: {
    display: 'flex',
    width: '100%',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: `${3 * theme.spacing.unit}px ${theme.spacing.unit}px`,
    width: '100%',
    '@media (min-width: 640px)': {
      width: `calc(66% - ${2 * theme.spacing.unit}px)`,
    },
  },
  formControlRight: {
    margin: `${3 * theme.spacing.unit}px ${theme.spacing.unit}px`,
    width: '100%',
    '@media (min-width: 640px)': {
      width: `calc(33% - ${2 * theme.spacing.unit}px)`,
    },
  },
  formControlFullWidth: {
    margin: `${3 * theme.spacing.unit}px ${theme.spacing.unit}px`,
    width: '100%',
  },
  submitButtonWrapper: {
    width: '100%',
    padding: `${3 * theme.spacing.unit}px ${theme.spacing.unit}px`,
  },
  submitButton: {
    float: 'right',
  },
  submitIcon: {
    marginLeft: theme.spacing.unit,
  },
})

class ZenbeeForm extends React.Component {
  state = {
    city: 'paris',
    days: 3,
    budget: 'low',
    knowledge: 'newbie',
    travelWith: 'solo',
    voyagers: 2,
  }

  componentDidMount() {
    ScrollEvents.scrollEvent.register('end', to => {
      if (to === 'query-form') {
        this.cityRef.focus()
      }
    })
  }

  componentWillUnmount() {
    ScrollEvents.scrollEvent.remove('end')
  }

  handleChange = name => event => {
    this.setState({ [name]: event.target.value })
  }

  needsToAskHowMany() {
    const { travelWith } = this.state
    return ['friends', 'family'].includes(travelWith)
  }

  render() {
    const { classes } = this.props
    return (
      <form id="query-form" className={classes.form} autoComplete="off">
        <div className={classes.container}>
          <ZenbeeSelect
            className={classes.formControl}
            name="city"
            label="Where are you going?"
            inputRef={ref => this.cityRef = ref.node}
            values={{
              paris: 'Paris',
            }}
            value={this.state['city']}
            handleChange={this.handleChange}
          />
          <ZenbeeNumberInput
            className={classes.formControlRight}
            label="How many days?"
            name="days"
            value={this.state.days}
            handleChange={this.handleChange}
          />
        </div>
        <div className={classes.container}>
          <ZenbeeSelect
            className={classes.formControl}
            name="budget"
            label="What's your budget (excl. hotel and shopping)?"
            values={{
              low: 'Low (less than 100$)',
              medium: 'Medium (between 100$ and 200$)',
              high: 'High (between 200$ and 300$)',
              veryHigh: 'Very high (more than 300$)',
            }}
            value={this.state.budget}
            handleChange={this.handleChange}
          />
          <ZenbeeSelect
            className={classes.formControlRight}
            name="knowledge"
            label="How well do you know the place?"
            values={{
              newbie: 'Newbie',
              intermediate: 'Intermediate',
              advanced: 'Advanced',
              expert: 'Expert',
            }}
            value={this.state.knowledge}
            handleChange={this.handleChange}
          />
        </div>
        <div className={classes.container}>
          <ZenbeeSelect
            className={this.needsToAskHowMany() ? classes.formControl : classes.formControlFullWidth}
            name="travelWith"
            label="Who am I travelling with?"
            values={{
              family: 'Family',
              friends: 'Friends',
              couple: 'Couple',
              solo: 'Solo',
            }}
            value={this.state.travelWith}
            handleChange={this.handleChange}
          />
          {this.needsToAskHowMany() && (
            <ZenbeeNumberInput
              className={classes.formControlRight}
              label="Voyagers"
              name="voyagers"
              value={this.state.voyagers}
              handleChange={this.handleChange}
            />
          )}
        </div>
        <div className={classes.submitButtonWrapper}>
          <Button raised color="primary" className={classes.submitButton}>
            Show me
            <img src={submitIcon} alt="" className={classes.submitIcon} />
          </Button>
        </div>
      </form>
    )
  }
}


ZenbeeForm.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(ZenbeeForm)
