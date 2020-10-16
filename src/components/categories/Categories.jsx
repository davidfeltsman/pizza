import React from 'react'
import Order from './Order'
import './categories.scss'
import { useDispatch } from 'react-redux'
import { setCategory, setOrderDirection, setSortBy } from '../../redux/actions/actionCreators';
import PropTypes from 'prop-types'

const avaibleCategories = ['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые', 'Грибы']

export default function Categories({ activeCategory, sortBy, orderDirection }) {

  const dispatch = useDispatch();

  function categoryClickHandler(value) {
    dispatch(setCategory(value))
  }

  function orderClickHandler() {
    if (orderDirection === 'desc') {
      dispatch(setOrderDirection('asc'));
    } else {
      dispatch(setOrderDirection('desc'));
    }
  }

  function sortClickHandler(value) {
    dispatch(setSortBy(value))
  }
  return (
    <>
      <nav className="categories">
        <ul className="categories__list">
          <li className="categories__item">
            <button onClick={() => categoryClickHandler(null)} className={activeCategory === null ? "categories__link categories__link_active" : "categories__link"}>Все</button>
          </li>
          {avaibleCategories.map((text, index) => {
            return (
              <li key={text + index} className="categories__item">
                <button onClick={() => categoryClickHandler(index)} className={index === activeCategory ? "categories__link categories__link_active" : "categories__link"}>{text}</button>
              </li>
            )
          })}
        </ul>
        <Order
          sortBy={sortBy}
          orderDirection={orderDirection}
          onOrderClick={orderClickHandler}
          onSortByClick={sortClickHandler}
        />
      </nav>
      <h2 className="categories__current-category">{activeCategory === null ? 'Все' : avaibleCategories[activeCategory]} пиццы</h2>
    </>
  )
}

Categories.propTypes = {
  activeCategory: PropTypes.oneOfType([
    PropTypes.oneOf([null]),
    PropTypes.number
  ]),
  sortBy: PropTypes.string.isRequired,
  orderDirection: PropTypes.string.isRequired
}

Categories.defauldProps = {
  activeCategory: null,
  sortBy: 'rating',
  orderDirection: 'desc'
}