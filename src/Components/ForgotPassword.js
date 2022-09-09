import React from 'react'
import TextField from '@mui/material/TextField';
import { Button } from '@material-ui/core';

const ForgotPassword = () => {
  return (
    <div>
        <div></div>
        <div style={{display:"flex",flexDirection:"column", margin:"10% 0 0 60%"}}>
        <TextField id="outlined-basic" label="Email" variant="outlined" style={{margin:"28px",width:"20rem"}} error={"nothing"}/>
        <TextField id="outlined-basic" label="New Password" variant="outlined" style={{margin:"28px",width:"20rem"}} />
        <TextField id="outlined-basic" label="Confirm Password" variant="outlined" style={{margin:"28px",width:"20rem"}}/>
       <div style={{display:'flex'}} width="">
        <Button variant="contained" style={{margin:"0 20px 0 30px"}}>Cancel</Button>
        <Button variant="contained" style={{margin:"0 0 0 20px"}}>Update</Button></div>
        </div>
    </div>
  )
}

export default ForgotPassword