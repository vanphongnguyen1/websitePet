import loginSlice from './loginSlice'
import { addProductCart } from './reducers/addProductCart'
import { addOrder } from './reducers/addOrder'
import statusLoginSlice from './statusLoginSlice'

export const rootReducers = {
  login: loginSlice,
  addProductCart,
  addOrder,
  statusLogin: statusLoginSlice
}
