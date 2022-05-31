import React, { Component } from 'react'
import { Route,Routes } from "react-router-dom";
import Navigation from "./Components/Navigation";
import HomePage from "./Components/HomePage";
import FoodList from "./Components/FoodList";
import CheckOut from "./Components/CheckOut";
 class App extends Component {
  render() {
    return (
      <>
      <Navigation />
    
        <Routes>
         <Route path='/' element={<HomePage/>}/>
         <Route path='/menu' element={<FoodList/>}/>
         <Route path='/checkout' element={<CheckOut/>}/>
         
         
        </Routes>
      </>
    )
  }
}
export default App;