import { SET_SORT_BY, SET_CATEGORY, SET_PIZZAS, SET_LOADING, SET_ORDER_DIRECTION } from '../constants'
import API from '../../utils/API'

//filters
export const setSortBy = (sortBy) => ({
  type: SET_SORT_BY,
  sortBy
})

export const setCategory = (category) => ({
  type: SET_CATEGORY,
  category
})

export const setOrderDirection = (orderDirection) => ({
  type: SET_ORDER_DIRECTION,
  orderDirection
})

//pizzas
export const fetchPizzas = () => (dispatch) => {
  API.get()
    .then(({ data }) => dispatch(setPizzas(data.pizzas)))
    .catch(err => alert('Ошибка загрузки данных'));
}

export const setLoading = (isLoading) => ({
  type: SET_LOADING,
  isLoading
})

export const setPizzas = (items) => ({
  type: SET_PIZZAS,
  items
})