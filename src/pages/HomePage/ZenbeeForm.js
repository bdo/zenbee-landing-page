import React from 'react'
import PropTypes from 'prop-types'
import { FormControl, InputLabel, MenuItem, Select, TextField } from 'material-ui'
import { withStyles } from 'material-ui/styles'
import { Events as ScrollEvents } from 'react-scroll'
import roundShape from './images/round-shape.svg'

const styles = theme => ({
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
    textAlign: 'center',
    position: 'relative',
    zIndex: 2,
  },
  howItWorks: {
    padding: `${14 * theme.spacing.unit}px 0`,
  },
  howItWorksTitle: {
    fontFamily: theme.typography.fontFamily,
    fontWeight: 'bold',
    fontSize: '1.6rem',
    color: 'white',
  },
  howItWorksUnderline: {
    backgroundColor: 'white',
    marginTop: '4ch',
    width: '4ch',
    height: 2,
    margin: '0 auto'
  },
  form: {
    textAlign: 'initial',
    margin: '0 12%',
    borderRadius: '8px 8px 0 0',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  container: {
    display: 'flex',
    width: '100%',
  },
  formControl: {
    margin: 3 * theme.spacing.unit,
    width: '100%',
    '@media (min-width: 640px)': {
      minWidth: `calc(66% - ${2 * 3 * theme.spacing.unit}px)`,
      flexGrow: 1,
    },
  },
  formControlRight: {
    flexGrow: 1,
    minWidth: `calc(33% - ${2 * 3 * theme.spacing.unit}px)`,
    margin: 3 * theme.spacing.unit,
  },
  formControlFullWidth: {
    margin: 3 * theme.spacing.unit,
    width: '100%',
  },
})

const ZenbeeSelect = ({
                        className, label, name, container, values, value, handleChange, inputRef = () => {
  }, id = `${name}-select`,
                      }) =>
  <FormControl className={className}>
    <InputLabel htmlFor={id}>{label}</InputLabel>
    <Select
      inputRef={inputRef}
      value={value}
      onChange={handleChange(name)}
      inputProps={{
        name,
        id,
      }}
    >
      {Object.keys(values).map(key =>
        <MenuItem key={key} value={key}>{values[key]}</MenuItem>,
      )}
    </Select>
  </FormControl>

const ZenbeeNumberInput = ({ className, label, name, value, handleChange, id = `${name}-input` }) =>
  <FormControl className={className}>
    <TextField
      id={id}
      label={label}
      value={value}
      onChange={handleChange(name)}
      type="number"
      InputLabelProps={{
        shrink: true,
      }}
    />
  </FormControl>


class ZenbeeForm extends React.Component {
  state = {
    city: 'paris',
    days: 3,
    budget: 'low',
    beenThere: 'never',
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
      <div className={classes.formWrapper}>
        <img className={classes.formShape} src={roundShape} alt=""/>
        <div className={classes.formContent}>
          <div className={classes.howItWorks}>
            <div className={classes.howItWorksTitle}>
              How it works
            </div>
            <div className={classes.howItWorksUnderline} />
          </div>
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
                label="Budget (excluding hotel and shopping)"
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
                name="beenThere"
                label="I have been there"
                values={{
                  never: 'Never',
                  once: 'Once',
                  twice: 'Twice',
                  threeAndMore: 'More than three times',
                }}
                value={this.state.beenThere}
                handleChange={this.handleChange}
              />
            </div>
            <div className={classes.container}>
              <ZenbeeSelect
                className={this.needsToAskHowMany() ? classes.formControl : classes.formControlFullWidth}
                name="travelWith"
                label="I travel with"
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
          </form>
        </div>
      </div>
    )
  }
}


ZenbeeForm.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(ZenbeeForm)
