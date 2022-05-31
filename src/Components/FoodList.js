import React, { useState, useEffect } from 'react'
import { Grid, Card, CardMedia, CardContent, CardActions, Typography, Button } from '@mui/material';


import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

import { connect } from "react-redux";
import { AddFood, RemoveFood,DecreaseBtn } from "../Store/Actions";


function FoodList(props) {

  useEffect(() => {
    setState({ FoodList: props.Foodsitems.Food })
  }, [props])

  const [State, setState] = useState({
    FoodList: []
  })

  const AddItemHandler = (id) => {
    props.AddFood(id)
    props.DecreaseBtn(id)
  }
  const RemoveItemHandler = (id) => {
    props.RemoveFood(id)
  }

  let FoodItemArry = State.FoodList.length > 0 ? State.FoodList.map((i, k) =>
    <>
      <Card key={k} style={{ width: '310px', height: '370px', marginLeft: '20px' }} >
        <CardMedia style={{ height: '180px' }}
          image={require(`../assets/${i.image}`)} title={i.name} />
        <CardContent >
          <Typography variant="h6" component="h6" style={{ fontSize: '20px' }}>{i.name} </Typography>
          <Typography variant="h6" style={{ fontSize: '16px' }} color="textSecondary">price : {i.price} </Typography>
          {i.Qty>0 && <>
            <Typography variant="h6" style={{fontSize:'16px'}} color="textSecondary">Total : {i.Qty} </Typography>
            <Typography variant="h6" style={{fontSize:'16px'}} color="textSecondary">Cost(INR) : {i.Qty*i.price} </Typography>
          </>}
        </CardContent>

        <CardActions disableSpacing>
          <Button onClick={() => AddItemHandler(i.id)} style={{backgroundColor:'#2c0f8a', marginRight: '10px' }} variant="contained" color="primary">
            <AddIcon />
          </Button>
          {i.totalItem===true && i.Qty>0 ? <>
            <Button onClick={() => RemoveItemHandler(i.id)} style={{backgroundColor:'red', marginRight: '10px' }} variant="contained" decreaseItems color="secondary">
            <RemoveIcon />
          </Button>
          </> :<>
          <Button variant="contained" decreaseItems disabled >
            <RemoveIcon />
          </Button>
          </> }
          
          
        </CardActions>
      </Card>
    </>
  ) : 'loading...'



  console.log(props.Foodsitems)

  return (
    <Grid container style={{ width: "100%", marginTop: "2rem" }}>
      <Grid item sm={1}></Grid>
      <Grid container item sm={10}>


        {FoodItemArry}


      </Grid>
      <Grid item sm={1}></Grid>

    </Grid>
  )
}

const mapStateToProps = (state) => {
  return {
    Foodsitems: { ...state.FoodReducers },
  }
}

const mapDispatchToProps = ({
  AddFood, RemoveFood,DecreaseBtn
})

export default connect(mapStateToProps, mapDispatchToProps)(FoodList)