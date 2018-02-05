import React from 'react'
import PropTypes from 'prop-types'
import { IconButton, Toolbar, Tooltip } from 'material-ui'
import { withStyles } from 'material-ui/styles'
import DeleteIcon from 'material-ui-icons/Delete'
import FilterListIcon from 'material-ui-icons/FilterList'
import classNames from 'classnames'

const toolbarStyles = theme => ({
  root: {
    paddingRight: theme.spacing.unit,
  },
  title: {
    fontFamily: theme.typography.fontFamily,
    flex: '0 0 auto',
  },
  heading: {
    margin: '1rem 0',
    fontSize: '1.2rem',
    fontColor: theme.palette.primary.main,
  },
  subheading: {
    margin: '1rem 0',
    fontSize: '1rem',
  },
  spacer: {
    flex: '1 1 100%',
  },
  actions: {
  },
  deleteIcon: {
    color: 'white',
  },
})

const EnhancedTableToolbar = ({ classes, title }) =>
  <Toolbar className={classes.root}>
    <div className={classes.title}>
      <div className={classes.heading}>{title}</div>
    </div>
    <div className={classes.spacer} />
    <div className={classes.actions}>
    </div>
  </Toolbar>

EnhancedTableToolbar.propTypes = {
  title: PropTypes.string.isRequired,
  classes: PropTypes.object.isRequired,
  numSelected: PropTypes.number.isRequired,
}

export default withStyles(toolbarStyles)(EnhancedTableToolbar)
