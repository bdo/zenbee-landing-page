import React from 'react'
import { MenuItem, TextField } from 'material-ui'

const ZenbeeSelect = ({ name, values, onBlur, ...props }) =>
  <TextField
    select
    inputProps={{
      onBlur,
    }}
    {...props}
  >
    {Object.keys(values).map(key =>
      <MenuItem key={key} value={key}>{values[key]}</MenuItem>,
    )}
  </TextField>

export default ZenbeeSelect
