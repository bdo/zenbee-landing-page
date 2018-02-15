import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import phoneImage from 'theme/images/phone.png'
import withOrangeRoot from 'theme/withOrangeRoot'
import beeLeft from 'theme/images/bee-left-white-path.svg'
import EmailForm from './EmailForm'

const styles = theme => ({
  root: {
    maxWidth: 1280,
    minHeight: '100vh',
    padding: '1rem 25px 60%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'initial',
    flexDirection: 'column',
    color: 'white',
    background: `
      url("${beeLeft}") no-repeat bottom 5% left 10%/90%,
      linear-gradient(to left, #f45553, #f47553)
    `,
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
    paddingTop: '1rem',
    '& p': {
      fontSize: '90%',
      fontWeight: 'bold',
      lineHeight: 1.4,
    },
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
      paddingBottom: 0,
      fontSize: '100%',
      background: `
      url("${beeLeft}") no-repeat bottom 5% left 1%/30%,
      linear-gradient(to left, #f45553, #f47553)
    `,
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

const ResultsPage = ({ classes }) =>
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
          To be part of our beta testers and be informed
          about the release of the service,
          please leave us your email address : )
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

ResultsPage.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withOrangeRoot(withStyles(styles)(ResultsPage))
