import { ADDPRODUCT, CARTUPDATA } from '../../redux/actionsType'

export const addProduct = item => {
  return {
    type: ADDPRODUCT,
    item
  }
}

export const updataCart = item => {
  return {
    type: CARTUPDATA,
    item
  }
}
