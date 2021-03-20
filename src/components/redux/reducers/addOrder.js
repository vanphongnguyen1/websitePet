import { ADDORDER } from '../actionsType'

export const addOrder = (state = [], action) => {
  switch (action.type) {
    case ADDORDER:
      return [
        ...state,
        action.item
      ]

    default:
      return state
  }
}
