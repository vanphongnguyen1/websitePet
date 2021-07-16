import loginSlice from './loginSlice'
import { addProductCart } from './reducers/addProductCart'
import { addOrder } from './reducers/addOrder'
import statusLoginSlice from './statusLoginSlice'
import productSlice from './productSlice'
import groupSlice from './groupSlice'
import lineageSlice from './lineageSlice'
import cartsSlice from './cartsSlice'
import ordersSlice from './ordersSlice'
import productInCartSlice from './productInCartSlice'
import imagesSlice from './imagesSlice'
import commentsSlice from './commentsSlice'
import newAction from './newAction'
import serviceAction from './serviceSlice'
import keySearchProductSlice from './keySearchproductSlice'

export const rootReducers = {
  login: loginSlice,
  addProductCart,
  addOrder,
  statusLogin: statusLoginSlice,
  products: productSlice,
  groups: groupSlice,
  lineages: lineageSlice,
  cart: cartsSlice,
  orders: ordersSlice,
  productInCart: productInCartSlice,
  images: imagesSlice,
  comments: commentsSlice,
  newAction,
  services: serviceAction,
  keySearchProduct: keySearchProductSlice
}
