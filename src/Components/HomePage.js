import React from 'react'
import { Button, Grid, Typography } from '@mui/material';
import { useNavigate } from "react-router-dom";


function HomePage(props) {
 
let navigate = useNavigate();


const GoToMenu =()=>{
  navigate('/menu')
}

  return (

       <Grid container style={{ height:'300px',width:'100%',marginTop:"5rem"}} >
                <Grid item sm={3}></Grid>
                <Grid container style={{height:'100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }} item sm={6}>
                    <Typography style={{fontSize:'4rem',textAlign:'center',fontWeight:'300'}}  variant="h3">Welcome to Food's Kitchen</Typography>
                     <Button  onClick={GoToMenu} style={{backgroundColor:'#2c0f8a', marginTop:'2rem'}} variant="contained" color="primary"> Go To Menu
                    </Button>
                </Grid>
                <Grid item sm={3}></Grid>

            </Grid>

  )
} 

export default HomePage