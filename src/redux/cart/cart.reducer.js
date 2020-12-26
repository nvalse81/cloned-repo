import CartActionTypes from './cart.types'
import { addItemToCart } from './cart.utils';

const INITIAL_SATE = {
  hidden: true,
  cartItems: []
}

const cartReducer = (state = INITIAL_SATE, action) => {
  switch (action.type) {
    case CartActionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden
      }

    case CartActionTypes.ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload)
      }

    default:
      return state;

  }
}

export default cartReducer;