import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import { Button, TextField } from 'material-ui'
import submitIcon from 'theme/icons/ico-submit-orange.svg'
import withOrangeRoot from 'theme/withOrangeRoot'

const styles = theme => ({
  root: {
  },
  textField: {
    width: 300,
  },
  submitButtonWrapper: {
    marginTop: '2rem',
    display: 'flex',
    justifyContent: 'center',
  },
  submitButton: {
  },
  submitIcon: {
    marginLeft: theme.spacing.unit,
  },
})

class HomePage extends React.Component {

  state = {
    name: '',
  }

  handleChange = field => e => {
    this.setState({ [field]: e.target.value })
  }

  render() {
    const { classes } = this.props
    return (
      <form>
        <div>
          <TextField
            id="email"
            label="Email"
            placeholder="yourname@company.com"
            value={this.state.email}
            className={classes.textField}
            onChange={this.handleChange('email')}
            margin="normal"
            InputProps={{
              classes: {
                root: classes.textFieldRoot,
                input: classes.textFieldInput,
              },
            }}
            InputLabelProps={{
              shrink: true,
              className: classes.textFieldFormLabel,
            }}
            autoFocus
          />
        </div>
        <div className={classes.submitButtonWrapper}>
          <Button raised color="primary" className={classes.submitButton} type="submit">
            Submit
            <img src={submitIcon} alt="" className={classes.submitIcon} />
          </Button>
        </div>
      </form>
    )
  }
}

HomePage.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withOrangeRoot(withStyles(styles)(HomePage))
