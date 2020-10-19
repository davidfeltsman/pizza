import { ADD_PIZZA_TO_BASKET, REMOVE_PIZZA_FROM_BASKET, REMOVE_PIZZA_GROUP, CLEAR_BASKET } from '../constants'

const initialState = {
  items: [],
  totalCounter: 0,
  totalPrice: 0,
}

const basket = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_PIZZA_TO_BASKET:
      if (!state.items.length) {
        return {
          ...state,
          items: [payload],
          totalCounter: state.totalCounter + 1,
          totalPrice: state.totalPrice + payload.price,
        }
      } else {
        let equal = state.items.findIndex(item => item.id === payload.id
          && item.doughType === payload.doughType
          && item.size === payload.size)
        if (equal !== -1) return {
          ...state,
          items: state.items.map((item, index) => index === equal
            ? { ...item, count: item.count + 1 }
            : item),
          totalCounter: state.totalCounter + 1,
          totalPrice: state.totalPrice + payload.price,
        }
        return {
          ...state,
          items: [...state.items, payload],
          totalCounter: state.totalCounter + 1,
          totalPrice: state.totalPrice + payload.price,
        }
      }
    case REMOVE_PIZZA_FROM_BASKET:
      if (state.items[payload] && state.items[payload].count === 1) {
        return {
          ...state,
          items: state.items.filter((item, index) => index !== payload),
          totalCounter: state.totalCounter - 1,
          totalPrice: state.totalPrice - state.items[payload].price
        }
      } else {
        return {
          ...state,
          items: state.items.map((item, index) => index === payload ? { ...item, count: state.items[index].count - 1 } : item),
          totalCounter: state.totalCounter - 1,
          totalPrice: state.totalPrice - state.items[payload].price
        }
      }
    case REMOVE_PIZZA_GROUP:
      return {
        ...state,
        items: state.items.filter((item, index) => index !== payload),
        totalCounter: state.totalCounter - state.items[payload].count,
        totalPrice: state.totalPrice - state.items[payload].price * state.items[payload].count,
      }
    case CLEAR_BASKET:
      return {
        ...state,
        items: [],
        totalCounter: 0,
        totalPrice: 0,
      }
    default:
      return {
        ...state
      }
  }
}

export default basket