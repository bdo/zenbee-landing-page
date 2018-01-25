import React from 'react'
import { TextField } from 'material-ui'

const ZenbeeNumberInput = ({ className, label, name, value, handleChange, id = `${name}-input` }) =>
  <TextField
    className={className}
    id={id}
    label={label}
    value={value}
    onChange={handleChange(name)}
    type="number"
    InputLabelProps={{
      shrink: true,
    }}
  />

export default ZenbeeNumberInput
