import React from 'react'
import { TextField } from 'material-ui'

const ZenbeeNumberInput = ({ min, max, ...props }) =>
  <TextField
    type="number"
    inputProps={{ min, max }}
    InputLabelProps={{
      shrink: true,
    }}
    {...props}
  />

export default ZenbeeNumberInput
