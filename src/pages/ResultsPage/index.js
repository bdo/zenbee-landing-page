import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import phoneImage from 'theme/images/phone.png'
import EmailForm from './EmailForm'

const styles = theme => ({
  root: {
    maxWidth: 1280,
    minHeight: '100vh',
    padding: '1rem 25px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'initial',
    flexDirection: 'column',
    color: 'white',
    backgroundImage: 'linear-gradient(to left, #f45553, #f47553)',
    fontFamily: theme.typography.fontFamily,
    fontSize: '80%',
  },
  contents: {
    width: '100%',
    display: 'flex',
    alignItems: 'initial',
    justifyContent: 'center',
  },
  form: {
    paddingTop: '2rem',
    '& p': {
      fontSize: '90%',
      fontWeight: 'bold',
      lineHeight: 1.4,
    }
  },
  mobile: {
    display: 'none',
  },
  img: {
    maxWidth: '100%',
  },
  '@media (min-width: 480px)': {
    root: {
      fontSize: '100%',
    },
  },
  '@media (min-width: 640px)': {
    root: {
      fontSize: '100%',
    },
    contents: {
      paddingTop: '4rem',
    },
    form: {
      flex: 1,
      minWidth: 385,
      width: '50%',
    },
    mobile: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
  },
  '@media (min-width: 1280px)': {
    root: {
      padding: '2rem 7%',
      margin: '25px auto',
      borderRadius: 20,
    },
  },
})

const HomePage = ({ classes }) =>
  <div className={classes.root}>
    <h1>
      Thank you for your interest
      in Zenbee travel assistant!
    </h1>
    <section className={classes.contents}>
      <aside className={classes.form}>
        <h2>
          We are not fully ready yet.
        </h2>
        <p>
          To be part of our beta testers and know more
          about the evolution of the project,
          leave us your email address : )
        </p>
        <EmailForm />
      </aside>
      <aside className={classes.mobile}>
        <img className={classes.img} src={phoneImage} alt="mobile app"/>
      </aside>
    </section>
    <aside>

    </aside>
  </div>

HomePage.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(HomePage)
