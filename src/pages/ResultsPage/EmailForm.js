import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import { withRouter } from 'react-router-dom'
import { Button, TextField } from 'material-ui'
import { withFormik } from 'formik'
import isEmail from 'validator/lib/isEmail'
import * as firebase from 'firebase'
import 'firebase/firestore'
import submitIcon from 'theme/icons/ico-submit-orange.svg'

const styles = theme => ({
  textField: {
    width: '100%',
    // prevent chrome autofill css to change the appearance of the email field
    [`& input:-webkit-autofill,
      & input:-webkit-autofill:hover,
      & input:-webkit-autofill:focus,
      & input:-webkit-autofill:active`]: {
      '-webkit-text-fill-color': 'white !important',
      color: 'white !important',
      transition: 'background-color 5000s ease-in-out 0s',
    },
  },
  submitButtonWrapper: {
    marginTop: '2rem',
    display: 'flex',
    justifyContent: 'center',
  },
  submitButton: {},
  submitIcon: {
    marginLeft: theme.spacing.unit,
  },
  '@media (min-width: 640px)': {
    textField: {
      maxWidth: 300,
    },
    submitButtonWrapper: {
      justifyContent: 'initial',
    },
  },
})

const InnerForm =
  ({
     classes,
     className,
     values,
     errors,
     touched,
     handleChange,
     handleBlur,
     handleSubmit,
     isSubmitting,
   }) =>
    <form className={className} onSubmit={handleSubmit}>
      <div>
        <TextField
          id="email"
          label="Email"
          placeholder="yourname@company.com"
          className={classes.textField}
          margin="normal"
          type="email"
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
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.email}
          error={touched.email && !!errors.email}
          helperText={errors.email}
        />
      </div>
      <div className={classes.submitButtonWrapper}>
        <Button raised color="primary" className={classes.submitButton} type="submit" disabled={isSubmitting}>
          Submit
          <img src={submitIcon} alt="" className={classes.submitIcon}/>
        </Button>
      </div>
    </form>

InnerForm.propTypes = {
  className: PropTypes.string,
  classes: PropTypes.object.isRequired,
}

const EmailForm = withFormik({
  validate: (values) => {
    const errors = {}
    if (!values.email) {
      errors.email = 'Required'
    } else if (!isEmail(values.email)) {
      errors.email = 'Invalid email address'
    }
    return errors
  },
  handleSubmit: async (values, { props, setSubmitting }) => {
    const { location, history } = props
    const { formId } = location.state
    const betaUsers = firebase.firestore().collection('betaUsers')
    if (formId) {
        await betaUsers.doc(formId).update({
          email: values.email,
          updatedAt: new Date(),
        })
    } else {
      await betaUsers.collection('betaUsers').add({
        email: values.email,
        createdAt: new Date(),
      })
    }
    setSubmitting(false)
    history.push({
      pathname: '/',
      state: {
        notify: 'subscribedToBeta',
      },
    })
  },
})(InnerForm)

export default withRouter(withStyles(styles)(EmailForm))
