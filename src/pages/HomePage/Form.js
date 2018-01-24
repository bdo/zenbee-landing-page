import React from 'react'
import PropTypes from 'prop-types'
import { FormControl, InputLabel, MenuItem, Select, TextField } from 'material-ui'
import { withStyles } from 'material-ui/styles'
import { Events as ScrollEvents } from 'react-scroll'

const styles = theme => ({
  formShape: {
    height: 100,
    overflow: 'hidden',
    position: 'relative',
    '&:after': {
      content: '""',
      display: 'block',
      width: '200%',
      height: 'calc(50vh)',
      backgroundImage: 'linear-gradient(to left, #f45553, #f47553)',
      borderRadius: '50%',
      top: '0',
      left: '-50%',
      right: '0',
      position: 'absolute',
    },
  },
  formWrapper: {
    backgroundImage: 'linear-gradient(to left, #f45553, #f47553)',
    padding: '0 12%',
  },
  form: {
    borderRadius: '8px 8px 0 0',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: 3 * theme.spacing.unit,
    width: '100%',
    '@media (min-width: 640px)': {
      width: 350,
    }
  },
  formControlRight: {
    margin: 3 * theme.spacing.unit,
    width: 161,
  },
})

class QueryForm extends React.Component {
  state = {
    city: '',
    days: 3,
    budget: 'low',
    beenThere: '',
    travelWith: 'friends',
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

  render() {
    const { classes } = this.props
    return (
      <div>
        <div className={classes.formShape} />
        <div className={classes.formWrapper}>
          <form id="query-form" className={classes.form} autoComplete="off">
            <div className={classes.container}>
              <FormControl className={classes.formControl}>
                <InputLabel htmlFor="city-simple">Where are you going?</InputLabel>
                <Select
                  inputRef={ref => this.cityRef = ref.node}
                  value={this.state.city}
                  onChange={this.handleChange('city')}
                  inputProps={{
                    name: 'city',
                    id: 'city-simple',
                  }}
                >
                  <MenuItem value="paris">Paris</MenuItem>
                </Select>
              </FormControl>
              <FormControl className={classes.formControlRight}>
                <TextField
                  id="number"
                  label="How many days?"
                  value={this.state.days}
                  onChange={this.handleChange('days')}
                  type="number"
                  className={classes.textField}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </FormControl>
            </div>
            <div className={classes.container}>
              <FormControl className={classes.formControl}>
                <InputLabel htmlFor="budget-simple">Budget (excluding hotel and shopping)</InputLabel>
                <Select
                  value={this.state.budget}
                  onChange={this.handleChange('budget')}
                  inputProps={{
                    name: 'budget',
                    id: 'budget-simple',
                  }}
                >
                  <MenuItem value="low">Low (less than 100$)</MenuItem>
                  <MenuItem value="medium">Medium (between 100$ and 200$)</MenuItem>
                  <MenuItem value="high">High (between 200$ and 300$)</MenuItem>
                  <MenuItem value="very-high">Very high (more than 300$)</MenuItem>
                </Select>
              </FormControl>
              <FormControl className={classes.formControlRight}>
                <InputLabel htmlFor="beenThere-simple">I have been there</InputLabel>
                <Select
                  value={this.state.beenThere}
                  onChange={this.handleChange('beenThere')}
                  inputProps={{
                    name: 'beenThere',
                    id: 'beenThere-simple',
                  }}
                >
                  <MenuItem value="never">Never</MenuItem>
                  <MenuItem value="once">Once</MenuItem>
                  <MenuItem value="twice">Twice</MenuItem>
                  <MenuItem value="three-and-more">More than three times</MenuItem>
                </Select>
              </FormControl>
            </div>
            <div className={classes.container}>
              <FormControl className={classes.formControl}>
                <InputLabel htmlFor="travelWith-simple">I travel with</InputLabel>
                <Select
                  value={this.state.travelWith}
                  onChange={this.handleChange('travelWith')}
                  inputProps={{
                    name: 'travelWith',
                    id: 'travelWith-simple',
                  }}
                >
                  <MenuItem value="family">Family</MenuItem>
                  <MenuItem value="friends">Friends</MenuItem>
                  <MenuItem value="couple">Couple</MenuItem>
                  <MenuItem value="solo">Solo</MenuItem>
                </Select>
              </FormControl>
              <FormControl className={classes.formControlRight}>
                <TextField
                  id="number"
                  label="Voyagers"
                  value={this.state.voyagers}
                  onChange={this.handleChange('voyagers')}
                  type="number"
                  className={classes.textField}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </FormControl>
            </div>
          </form>
        </div>
      </div>
    )
  }
}


QueryForm.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(QueryForm)
