
import {ADD_ITEMS,REMOVE_ITEMS,DECREASE_BUTTON,GET_ITEMS}  from '../ActionType'

export  const AddFood = (id)=>{
return{
    type:ADD_ITEMS,
    payload:id
}
}
export  const RemoveFood = (id)=>{
    return{
        type:REMOVE_ITEMS,
        payload:id
    }
}
export  const DecreaseBtn = (id)=>{
    return{
        type:DECREASE_BUTTON,
        payload:id
    }
}
export  const GetFood = ()=>{
return {
    type:GET_ITEMS
}
}