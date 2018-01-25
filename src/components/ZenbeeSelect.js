import React from 'react'
import { FormControl, InputLabel, MenuItem, Select } from 'material-ui'

const ZenbeeSelect = ({ className, label, name, container, values, value, handleChange, inputRef, id = `${name}-select` }) =>
  <FormControl className={className}>
    <InputLabel htmlFor={id}>{label}</InputLabel>
    <Select
      inputRef={inputRef}
      value={value}
      onChange={handleChange(name)}
      inputProps={{
        name,
        id,
      }}
    >
      {Object.keys(values).map(key =>
        <MenuItem key={key} value={key}>{values[key]}</MenuItem>,
      )}
    </Select>
  </FormControl>

export default ZenbeeSelect
