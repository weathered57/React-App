import * as actionTypes from "../actions/actionTypes";
import initialState from "./initialState";

export default function cartReducer(state = initialState.cart, action) {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      var addedItem = state.find(c=>c.product.productId === action.payload.product.productId);
      if(addedItem)
      {
          var newstate=state.map(cartItem => {
           if(cartItem.product.productId === action.payload.product.productId){
               return Object.assign({},addedItem,{quantity:addedItem.quantity+1})
           }
           return cartItem;
          })
          return newstate;
      }
      else{
          return [...state,{...action.payload}]
      }
      
    default:
      return state;
  }
}
