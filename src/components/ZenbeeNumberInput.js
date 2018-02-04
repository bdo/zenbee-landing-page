import React from 'react'
import { TextField } from 'material-ui'

const ZenbeeNumberInput = props =>
  <TextField
    type="number"
    InputLabelProps={{
      shrink: true,
    }}
    {...props}
  />

export default ZenbeeNumberInput
