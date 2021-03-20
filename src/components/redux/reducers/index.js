import { combineReducers } from 'redux'
import { addProductCart } from './addProductCart'
import { addOrder } from './addOrder'

const rootReducers = combineReducers({
  addProductCart,
  addOrder
})

export default rootReducers
