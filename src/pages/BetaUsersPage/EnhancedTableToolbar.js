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
  highlight: {
    backgroundColor: theme.palette.primary.main,
    '& > *': {
      color: 'white',
    },
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
    color: theme.palette.text.secondary,
  },
  deleteIcon: {
    color: 'white',
  },
})

const EnhancedTableToolbar = ({ numSelected, classes, title }) =>
  <Toolbar className={classNames(classes.root, { [classes.highlight]: numSelected > 0 })}>
    <div className={classes.title}>
      <div className={classes.heading}>{title}</div>
      {numSelected > 0 && <div className={classes.subheading}>{numSelected} selected</div>}
    </div>
    <div className={classes.spacer} />
    <div className={classes.actions}>
      {numSelected > 0 ? (
        <Tooltip title="Delete">
          <IconButton aria-label="Delete">
            <DeleteIcon className={classes.deleteIcon} />
          </IconButton>
        </Tooltip>
      ) : (
        <Tooltip title="Filter list">
          <IconButton aria-label="Filter list">
            <FilterListIcon />
          </IconButton>
        </Tooltip>
      )}
    </div>
  </Toolbar>

EnhancedTableToolbar.propTypes = {
  title: PropTypes.string.isRequired,
  classes: PropTypes.object.isRequired,
  numSelected: PropTypes.number.isRequired,
}

export default withStyles(toolbarStyles)(EnhancedTableToolbar)
