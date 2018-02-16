import React from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import { withStyles } from 'material-ui/styles'
import { Button } from 'material-ui'
import { Formik } from 'formik'
import { compose } from 'recompose'
import ZenbeeNumberInput from 'components/ZenbeeNumberInput'
import ZenbeeSelect from 'components/ZenbeeSelect'
import submitIcon from 'theme/icons/ico-submit.svg'
import * as firebase from 'firebase'
import 'firebase/firestore'

const styles = theme => ({
  root: {
    minHeight: '100vh',
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '8% 5%',
  },
  title: {
    fontFamily: theme.typography.fontFamily,
    fontWeight: 'bold',
    fontSize: '4.5vw',
    width: '100%',
    paddingBottom: '10%',
    color: theme.palette.primary.main,
    '& br': {
      content: '" "',
      '&::after': {
        content: '" "',
      },
    },
  },
  form: {
    width: '100%',
    textAlign: 'initial',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  container: {
    display: 'flex',
    width: '100%',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: `0 ${theme.spacing.unit}px ${4 * theme.spacing.unit}px`,
    width: '100%',
  },
  formControlRight: {
    margin: `0 ${theme.spacing.unit}px ${4 * theme.spacing.unit}px`,
    width: '100%',
  },
  formControlFullWidth: {
    margin: `0 ${theme.spacing.unit}px ${4 * theme.spacing.unit}px`,
    width: '100%',
  },
  submitButtonWrapper: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    padding: `${2 * theme.spacing.unit}px ${theme.spacing.unit}px`,
  },
  submitButton: {
    display: 'block',
    margin: '0 auto',
  },
  submitIcon: {
    marginLeft: theme.spacing.unit,
    transform: 'scale(0.8) translateY(5px)',
  },
  '@media (min-width: 800px)': {
    root: {
      minHeight: 'auto',
      borderRadius: '8px 8px 0 0',
      flexDirection: 'row',
      alignItems: 'flex-start',
      margin: '0 8%',
      paddingBottom: 14 * theme.spacing.unit,
    },
    title: {
      width: '33%',
      fontSize: '1.6rem',
      paddingBottom: 0,
      '& br': {
        content: 'normal',
        '&::after': {
          content: 'normal',
        },
      },
    },
    form: {
      width: '66%',
    },
    formControl: {
      width: `calc(66% - ${2 * theme.spacing.unit}px)`,
    },
    formControlRight: {
      width: `calc(33% - ${2 * theme.spacing.unit}px)`,
    },
    submitButtonWrapper: {
      display: 'block',
    },
    submitButton: {
      float: 'right',
    },
  },
})

class ZenbeeForm extends React.Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
  }

  needsToAskHowMany(travelWith) {
    return ['friends', 'family'].includes(travelWith)
  }

  render() {
    const { classes, history } = this.props
    return (
      <div id="query-form" className={classes.root}>
        <div className={classes.title}>
          Build<br/>
          your trip<br/>
          with Zenbee assistance
        </div>
        <Formik
          initialValues={{
            city: '',
            days: 3,
            knowledge: 'newbie',
            travelWith: 'solo',
            voyagers: 2,
            budget: '',
          }}
          validate={values => {
            const errors = {}
            if (!values.city) {
              errors.city = 'Required'
            }
            if (!values.budget) {
              errors.budget = 'Required'
            }
            return errors
          }}
          onSubmit={async (values, { setSubmitting }) => {
            const formData = { ...values }
            if (!this.needsToAskHowMany(values.travelWith)) {
              formData.voyagers = 2
            }
            formData.createdAt = new Date()
            const docRef = await firebase
              .firestore()
              .collection('betaUsers')
              .add(formData)
            setSubmitting(false)
            history.push({ pathname: '/results', state: { formId: docRef.id } })
          }}
          render={({ values, touched, handleSubmit, handleChange, handleBlur, isSubmitting, errors }) =>
            <form className={classes.form} autoComplete="off" onSubmit={handleSubmit}>
              <div className={classes.container}>
                <ZenbeeSelect
                  className={classes.formControl}
                  name="city"
                  label="Where are you going?"
                  values={{
                    amsterdam: 'Amsterdam',
                    barcelona: 'Barcelona',
                    berlin: 'Berlin',
                    florence: 'Florence',
                    london: 'London',
                    madrid: 'Madrid',
                    moscow: 'Moscow',
                    newyork: 'New York',
                    paris: 'Paris',
                    prague: 'Prague',
                    rome: 'Rome',
                    tokyo: 'Tokyo',
                    venice: 'Venice',
                    vienna: 'Vienna',
                    washington: 'Washington',
                  }}
                  value={values.city}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.city && !!errors.city}
                  helperText={errors.city}
                />
                <ZenbeeNumberInput
                  className={classes.formControlRight}
                  label="How many days?"
                  name="days"
                  min="1"
                  max="99"
                  value={values.days}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </div>
              <div className={classes.container}>
                <ZenbeeSelect
                  className={this.needsToAskHowMany(values.travelWith) ? classes.formControl : classes.formControlFullWidth}
                  name="travelWith"
                  label="Who are you travelling with?"
                  values={{
                    family: 'Family',
                    friends: 'Friends',
                    couple: 'Couple',
                    solo: 'Solo',
                  }}
                  value={values.travelWith}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {this.needsToAskHowMany(values.travelWith) && (
                  <ZenbeeNumberInput
                    className={classes.formControlRight}
                    label="Voyagers"
                    name="voyagers"
                    min="1"
                    max="99"
                    value={values.voyagers}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                )}
              </div>
              <div className={classes.container}>
                <ZenbeeSelect
                  className={classes.formControlFullWidth}
                  name="knowledge"
                  label="How well do you know the place?"
                  values={{
                    newbie: 'Newbie',
                    intermediate: 'Intermediate',
                    advanced: 'Advanced',
                    expert: 'Expert',
                  }}
                  value={values.knowledge}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </div>
              <div className={classes.container}>
                <ZenbeeSelect
                  className={classes.formControlFullWidth}
                  name="budget"
                  label={<span>What's your budget <span style={{ textTransform: 'none' }}>(excl. hotel & shopping)</span>?</span>}
                  values={{
                    low: 'Low (less than 100$)',
                    medium: 'Medium (between 100$ and 200$)',
                    high: 'High (between 200$ and 300$)',
                    veryHigh: 'Very high (more than 300$)',
                    askMeLater: 'Ask me later',
                  }}
                  value={values.budget}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.budget && !!errors.budget}
                  helperText={errors.budget}
                />
              </div>
              <div className={classes.submitButtonWrapper}>
                <Button raised color="primary" className={classes.submitButton} type="submit" disabled={isSubmitting}>
                  Show me
                  <img src={submitIcon} alt="" className={classes.submitIcon}/>
                </Button>
              </div>
            </form>
          }
        />
      </div>
    )
  }
}

export default compose(
  withRouter,
  withStyles(styles),
)(ZenbeeForm)
