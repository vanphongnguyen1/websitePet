import loginSlice from './loginSlice'
import { addProductCart } from './reducers/addProductCart'
import { addOrder } from './reducers/addOrder'
import statusLoginSlice from './statusLoginSlice'
import productSlice from './productSlice'
import groupSlice from './groupSlice'
import lineageSlice from './lineageSlice'

export const rootReducers = {
  login: loginSlice,
  addProductCart,
  addOrder,
  statusLogin: statusLoginSlice,
  products: productSlice,
  groups: groupSlice,
  lineages: lineageSlice
}
