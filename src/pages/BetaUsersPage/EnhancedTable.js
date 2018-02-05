import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import Table, {
  TableBody,
  TableCell,
  TableFooter,
  TablePagination,
  TableRow,
} from 'material-ui/Table'
import Checkbox from 'material-ui/Checkbox'
import EnhancedTableToolbar from './EnhancedTableToolbar'
import EnhancedTableHead from './EnhancedTableHead'
import { formatRelative } from 'date-fns'

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit,
  },
  table: {
    minWidth: 800,
  },
  tableWrapper: {
    overflowX: 'auto',
  },
})

class EnhancedTable extends React.Component {
  state = {
    order: 'desc',
    orderBy: 'createdAt',
    data: [],
    page: 0,
    rowsPerPage: 5,
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.data !== nextProps.data) {
      const { order, orderBy } = this.state
      this.setState({ data: this.sortBy(nextProps.data, order, orderBy) })
    }
  }

  handleRequestSort = (event, property) => {
    const orderBy = property
    let order = 'desc'

    if (this.state.orderBy === property && this.state.order === 'desc') {
      order = 'asc'
    }

    const data = this.sortBy(this.state.data, order, orderBy)

    this.setState({ data, order, orderBy })
  }

  sortBy(data, order, orderBy) {
    return order === 'desc' ?
      data.sort((a, b) => (b[orderBy] < a[orderBy] ? -1 : 1)) :
      data.sort((a, b) => (a[orderBy] < b[orderBy] ? -1 : 1))
  }

  handleChangePage = (event, page) => {
    this.setState({ page })
  }

  handleChangeRowsPerPage = event => {
    this.setState({ rowsPerPage: event.target.value })
  }

  render() {
    const { classes, title } = this.props
    const { data, order, orderBy, rowsPerPage, page } = this.state
    const emptyRows = rowsPerPage - Math.min(rowsPerPage, data.length - page * rowsPerPage)

    return (
      <div className={classes.root}>
        <EnhancedTableToolbar title={title} />
        <div className={classes.tableWrapper}>
          <Table className={classes.table}>
            <EnhancedTableHead
              order={order}
              orderBy={orderBy}
              onRequestSort={this.handleRequestSort}
              rowCount={data.length}
            />
            <TableBody>
              {data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(n => {
                return (
                  <TableRow
                    hover
                    role="checkbox"
                    tabIndex={-1}
                    key={n.id}
                  >
                    <TableCell>{n.createdAt && formatRelative(n.createdAt, new Date())}</TableCell>
                    <TableCell>{n.city}</TableCell>
                    <TableCell numeric>{n.days}</TableCell>
                    <TableCell>{n.knowledge}</TableCell>
                    <TableCell>{n.travelWith}</TableCell>
                    <TableCell numeric>{n.voyagers}</TableCell>
                    <TableCell>{n.budget}</TableCell>
                    <TableCell>{n.email}</TableCell>
                  </TableRow>
                )
              })}
              {emptyRows > 0 && (
                <TableRow style={{ height: 49 * emptyRows }}>
                  <TableCell colSpan={8} />
                </TableRow>
              )}
            </TableBody>
            <TableFooter>
              <TableRow>
                <TablePagination
                  colSpan={8}
                  count={data.length}
                  rowsPerPage={rowsPerPage}
                  page={page}
                  backIconButtonProps={{
                    'aria-label': 'Previous Page',
                  }}
                  nextIconButtonProps={{
                    'aria-label': 'Next Page',
                  }}
                  onChangePage={this.handleChangePage}
                  onChangeRowsPerPage={this.handleChangeRowsPerPage}
                />
              </TableRow>
            </TableFooter>
          </Table>
        </div>
      </div>
    )
  }
}

EnhancedTable.propTypes = {
  classes: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  data: PropTypes.array,
}

export default withStyles(styles)(EnhancedTable)
