import { ADDORDER } from '../actionsType'

export const addOrder = item => {
  return {
    type: ADDORDER,
    item
  }
}
