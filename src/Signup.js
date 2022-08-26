import { Button, TextField } from '@mui/material'
import React from 'react'

export default function Signup() {
  return (
    <div>
      <div className='add-movie'>
      <TextField className="input"  id="filled-basic" label="Enter poster url" variant="filled" />
      <TextField className="input"  id="filled-basic" label="Enter movie Title" variant="filled" />
      <TextField className="input"  id="filled-basic" label="Enter movie Rating" variant="filled" />
      <TextField className="input"  id="filled-basic" label="Enter movie Description" variant="filled" />
      <TextField className="input"  id="filled-basic" label="Enter movie Trailer url" variant="filled" />
      <Button style={{ width: "20%" }} className="add"  variant="contained">Add Movie</Button>
    </div>
    </div>
  )
}
