import { ADD_ITEMS, REMOVE_ITEMS, DECREASE_BUTTON, GET_ITEMS } from '../ActionType'

import { v4 } from "uuid";

const initialState = {
    Food: [
        {
            "name": "Hamburger",
            "price": 200,
            "image": "burger.jpeg",
            "id": v4(),
            "totalItem": false,
            "Qty": 0
        },
        {
            "name": "Fries",
            "price": 100,
            "image": "fries.jpeg",
            "id": v4(),
            "totalItem": false,
            "Qty": 0
        },
        {
            "name": "Coke",
            "price": 50,
            "image": "coke.jpeg",
            "id": v4(),
            "totalItem": false,
            "Qty": 0
        },
        {
            "name": "Pepsi",
            "price": 50,
            "image": "pepsi.jpeg",
            "id": v4(),
            "totalItem": false,
            "Qty": 0
        }
    ],
    items: [],
    totalPrice: ''
}

const FoodReducers = (state = initialState, action) => {
    switch (action.type) {
        case GET_ITEMS:
            return { ...state }
        case ADD_ITEMS:
            const checkItem = state.items.find(i => i.id === action.payload)
            if (checkItem) {
                checkItem.Qty++
            } else {
                const FoodsItem = state.Food.find(i => i.id === action.payload)
                FoodsItem.Qty++
                state.items.push(FoodsItem)
            }

            return {...state};

        case REMOVE_ITEMS:
            const CHEKItem = state.items.find(i => i.id === action.payload)
             if(CHEKItem){
              --CHEKItem.Qty 
             }else{
                console.log('item not Found')
             } 
            return {...state}  

            case DECREASE_BUTTON:
                const ItemList = state.items.find(i => i.id === action.payload) 
                const copyItem = state.Food.find(i => i.id === ItemList.id) 
                copyItem.totalItem = true
               return {
                   ...state,
               }
        default:
            return { ...state };
    }
}


export default FoodReducers;