import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom'

import { AppBar, Box, Toolbar, Typography, IconButton, Badge } from '@mui/material';
import { useNavigate } from "react-router-dom";

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import { styled } from '@mui/material/styles';

import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

import { connect } from "react-redux";
import { AddFood, RemoveFood, DecreaseBtn } from "../Store/Actions";

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}));


function Navigation(props) {

  let navigate = useNavigate();
  const [open, setOpen] = React.useState(false);
  const [fullWidth, setFullWidth] = React.useState(true);
  const [State, setState] = useState({
    FoodList: [],
  })

  useEffect(() => {
   
    setState({ FoodList: props.Foodsitems.Food })
  }, [props])

  const GoToCheckout = () => {
    setOpen(false);
    navigate('/checkout')
  }

  const AddItemHandler = (id) => {
    props.AddFood(id)
    props.DecreaseBtn(id)
  }
  const RemoveItemHandler = (id) => {
    props.RemoveFood(id)
  }



  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };




  let FoodItemArry = State.FoodList.length > 0 ? State.FoodList.map((i, k) => <>
            {i.Qty>0&&<>
             
              <div style={{ width: '100%', display: 'flex', marginBottom: '10px' }} >
              <div style={{ display: 'flex', justifyContent: 'space-between', width: '50%' }}>
                <Typography variant="h6" color="textSecondary">{i.name}</Typography>
                <Typography variant="h6" color="textSecondary">{i.Qty}</Typography>
              </div>
              <div style={{ width: '50%', display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }} >
                <Button style={{backgroundColor:'#2c0f8a'}} onClick={() => AddItemHandler(i.id)} variant="contained" color="primary">
                  <AddIcon />
                </Button>

                { i.totalItem===true && i.Qty>0 ? <>
                  <Button  onClick={() => RemoveItemHandler(i.id)} style={{backgroundColor:'red', marginLeft: '10px' }} variant="contained" decreaseItems color="secondary">
                  <RemoveIcon />
                </Button>
                </>:<>
                <Button style={{ marginLeft: '10px' }} variant="contained" decreaseItems disabled >
                  <RemoveIcon />
                </Button>
                </>}
                


              </div>
            </div>
            </>}
            
  </>):''

var total = 0
let totalAmount = State.FoodList.filter((i,k)=>i.Qty>0)

total = totalAmount.map(i=> total+=i.price*i.Qty)

total = total[total.length-1]


  return (
    <>
      <Box sx={{ flexGrow: 1 }}>

        <AppBar style={{backgroundColor:'#2c0f8a'}} position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path fill="#fff" d="M11 9H9V2H7v7H5V2H3v7c0 2.12 1.66 3.84 3.75 3.97V22h2.5v-9.03C11.34 12.84 13 11.12 13 9V2h-2v7zm5-3v8h2.5v8H21V2c-2.76 0-5 2.24-5 4z" /></svg>
            </IconButton>
            <Typography variant="h6" component="div" style={{ fontWeight: '500' }} sx={{ flexGrow: 1 }}>
              <Link style={{ textDecoration: 'none', color: '#fff' }} to='/'>
                Food's Restaurant
              </Link>

            </Typography>

            <div>
              {totalAmount.length>0&&
              <IconButton aria-label="cart" onClick={handleClickOpen} >
              <StyledBadge badgeContent={totalAmount.length} color="secondary">
                <ShoppingCartOutlinedIcon style={{color:'white'}} />
              </StyledBadge>
            </IconButton>}
              

            </div>

          </Toolbar>
        </AppBar>
      </Box>
      <Dialog
        fullWidth={fullWidth}
        maxWidth='sm'
        open={open}
        onClose={handleClose}
      >
        <DialogTitle>
          <Typography variant='h6' style={{ fontSize: '25px' }} >Order Summary</Typography  >
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
           
            {FoodItemArry}

            <Typography variant="h6"  color="textSecondary">Total (INR) : {total} </Typography>
          </DialogContentText>

        </DialogContent>
        <DialogActions>
          <Button variant="contained" style={{backgroundColor:'#2c0f8a'}} color="primary" onClick={GoToCheckout}>Save And CheckOut</Button>
          <Button color="primary" onClick={handleClose}>cancel</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    Foodsitems: { ...state.FoodReducers },
  }
}

const mapDispatchToProps = ({
  AddFood, RemoveFood, DecreaseBtn
})

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);