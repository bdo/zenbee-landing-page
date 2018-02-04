import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import { withRouter } from 'react-router-dom'
import { compose } from 'recompose'
import { Snackbar, IconButton } from 'material-ui'
import zenbeeLogo from 'theme/images/zenbee-logo.png'
import CloseIcon from 'material-ui-icons/Close'
import Header from './Header'
import Pictures from './Pictures'
import Features from './Features'
import OrangeSection from './OrangeSection'

const styles = theme => ({
  root: {
    maxWidth: 1280,
    backgroundColor: 'white',
    minHeight: '100vh',
    overflowX: 'hidden',
  },
  '@media (min-width: 1280px)': {
    root: {
      margin: '25px auto',
      borderRadius: 20,
    },
  },
  close: {
    width: theme.spacing.unit * 4,
    height: theme.spacing.unit * 4,
  },
  snackBarContent: {
    color: theme.typography.headline.color,
    background: 'white',
    fontWeight: 'bold',
  },
})

class HomePage extends React.Component {
  state = {
    notificationOpen: false,
  }

  handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    this.setState({ open: false });
  }

  componentDidMount() {
    const { location, history } = this.props
    if (location.state && location.state.notify) {
      history.push('/')
      this.setState({ open: true })
    }
  }

  render() {
    const { classes } = this.props
    return (
      <div className={classes.root}>
        <Header />
        <Pictures />
        <Features />
        <OrangeSection />
        <Snackbar
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
          }}
          open={this.state.open}
          autoHideDuration={7000}
          onClose={this.handleClose}
          SnackbarContentProps={{
            className: classes.snackBarContent,
            'aria-describedby': 'message-id',
          }}
          message={
            <span id="message-id">
              Congratulations!{' '}
              <span style={{ fontSize: '150%' }} role="img" aria-label="party">🎉</span>
              <br/>
              <br/>
              You have registered to the Zenbee beta program. We will notify you as soon as it becomes available!<br/>
              <br/>
              <div>The <img src={zenbeeLogo} alt="" style={{ display: 'inline-block', width: '3.4rem' }} /> team.</div>
            </span>
          }
          action={[
            <IconButton
              key="close"
              aria-label="Close"
              color="inherit"
              className={classes.close}
              onClick={this.handleClose}
            >
              <CloseIcon />
            </IconButton>,
          ]}
        />
      </div>
    )
  }
}

HomePage.propTypes = {
  classes: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  location: PropTypes.shape({
    state: PropTypes.object,
  }).isRequired
}

export default compose(
  withRouter,
  withStyles(styles),
)(HomePage)
