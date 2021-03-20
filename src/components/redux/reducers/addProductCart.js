import { ADDPRODUCT, CARTUPDATA } from '../actionsType'
const init = []

export const addProductCart = (state = init, action) => {
  switch (action.type) {
    case ADDPRODUCT: {
      const [ ...newState ] = state

      if (newState.length > 0) {
        const index = newState.findIndex(product => product.id === action.item.id)

        if (index !== -1) {
          newState.splice(index, 1, action.item)
          return newState
        }
      }

      newState.push(action.item)
      return newState
    }

    case CARTUPDATA: {
      return action.item
    }
    default:
      return state
  }
}

