import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import { compose } from 'recompose'
import EnhancedTable from './EnhancedTable'
import * as firebase from 'firebase'
import 'firebase/firestore'

const styles = theme => ({
  root: {
    backgroundColor: 'white',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'initial',
  },
  titleSection: {
    paddingTop: theme.spacing.unit * 4,
  },
})

class BetaUsersPage extends React.Component {
  state = {
    data: [],
  }

  async componentDidMount() {
    const betaUsers = firebase.firestore().collection('betaUsers')
    await this.refresh(betaUsers)
    betaUsers.onSnapshot(() => this.refresh(betaUsers))
  }

  async refresh(betaUsers) {
    const snapshot = await betaUsers.get()
    const data = snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
    }))
    this.setState({ data })
  }

  render() {
    const { classes } = this.props
    const { data } = this.state
    return (
      <div className={classes.root}>
        <EnhancedTable title='Landing page records' data={data} />
      </div>
    )
  }
}

BetaUsersPage.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default compose(
  withStyles(styles),
)(BetaUsersPage)
