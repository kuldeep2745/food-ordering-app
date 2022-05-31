import React from 'react'
import { Card, Grid, Typography } from '@mui/material';
function CheckOut() {
  return (
    <Grid container style={{  width: "100%", marginTop: "3rem",}}>
                <Grid item sm={2}></Grid>
                <Grid container item sm={8}>
                <Card style={{ width: "100%", marginTop: "3rem",padding:'20px 0'}} >
                <Typography style={{ width: "100%", marginBottom: "1rem", textAlign: 'center'}} variant="h4">Order Dispatched</Typography>
                <Typography style={{width: "100%", marginBottom: "1rem", textAlign: 'center'}} variant="h5">We Got Your Order Thank you.</Typography>
                </Card>
                   
                </Grid>
                <Grid item sm={2}></Grid>
            </Grid>
  )
}

export default CheckOut