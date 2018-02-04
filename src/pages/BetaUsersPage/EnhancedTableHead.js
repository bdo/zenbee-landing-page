import React from 'react'
import PropTypes from 'prop-types'
import {
  TableCell,
  TableHead,
  TableRow,
  TableSortLabel,
} from 'material-ui/Table'
import Checkbox from 'material-ui/Checkbox'
import Tooltip from 'material-ui/Tooltip'

const columnData = [
  { id: 'createdAt', numeric: false, disablePadding: true, label: 'Time' },
  { id: 'city', numeric: false, disablePadding: false, label: 'City' },
  { id: 'days', numeric: true, disablePadding: false, label: 'Days' },
  { id: 'knowledge', numeric: false, disablePadding: false, label: 'Knowledge' },
  { id: 'travelWith', numeric: false, disablePadding: false, label: 'Travel with' },
  { id: 'voyagers', numeric: true, disablePadding: false, label: 'Voyagers' },
  { id: 'budget', numeric: false, disablePadding: false, label: 'Budget' },
  { id: 'email', numeric: false, disablePadding: false, label: 'Email' },
]

class EnhancedTableHead extends React.Component {
  createSortHandler = property => event => {
    this.props.onRequestSort(event, property)
  }

  render() {
    const { onSelectAllClick, order, orderBy, numSelected, rowCount } = this.props

    return (
      <TableHead>
        <TableRow>
          <TableCell padding="checkbox">
            <Checkbox
              indeterminate={numSelected > 0 && numSelected < rowCount}
              checked={numSelected === rowCount}
              onChange={onSelectAllClick}
            />
          </TableCell>
          {columnData.map(column => {
            return (
              <TableCell
                key={column.id}
                numeric={column.numeric}
                padding={column.disablePadding ? 'none' : 'default'}
                sortDirection={orderBy === column.id ? order : false}
              >
                <Tooltip
                  title="Sort"
                  placement={column.numeric ? 'bottom-end' : 'bottom-start'}
                  enterDelay={300}
                >
                  <TableSortLabel
                    active={orderBy === column.id}
                    direction={order}
                    onClick={this.createSortHandler(column.id)}
                  >
                    {column.label}
                  </TableSortLabel>
                </Tooltip>
              </TableCell>
            )
          }, this)}
        </TableRow>
      </TableHead>
    )
  }
}

EnhancedTableHead.propTypes = {
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.string.isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
}

export default EnhancedTableHead
