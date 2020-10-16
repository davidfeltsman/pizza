import { ADD_PIZZA_TO_BUSKET } from '../constants'

const initialState = {
  items: {},
  totalCounter: 0,
  totalPrice: 0
}

const basket = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_PIZZA_TO_BUSKET:
      const newItemId = payload.id + payload.doughType + payload.size
      if (state.items[newItemId]) {
        return {
          ...state,
          items: {
            ...state.items,
            [newItemId]: {
              ...state.items[newItemId],
              count: state.items[newItemId].count + 1
            }
          },
          totalCounter: state.totalCounter + 1,
          totalPrice: state.totalPrice + payload.price
        }
      } else {
        return {
          ...state,
          items: {
            ...state.items,
            [newItemId]: { ...payload }
          },
          totalCounter: state.totalCounter + 1,
          totalPrice: state.totalPrice + payload.price
        }
      }
    default:
      return {
        ...state
      }
  }
}

export default basket