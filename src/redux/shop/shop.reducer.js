import ShopActionTypes from './shop.types'

const INITIAL_SATE = {
  collections: null
}

const shopReducer = (state = INITIAL_SATE, action) => {
  switch (action.type) {
    case ShopActionTypes.UPDATE_COLLECTIONS:
      return {
        ...state,
        collections: action.payload
      }

    default:
      return state;
  }
}

export default shopReducer