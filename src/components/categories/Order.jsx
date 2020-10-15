import React, { useState, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'

export default function Order({ sortBy, orderDirection, onOrderClick, onSortByClick }) {

  const orderRus = ['популярности', 'цене', 'алфавиту']
  const orderEng = ['rating', 'price', 'name']

  let currentOption = getCurrentOption()

  function getCurrentOption() {
    return orderRus[orderEng.findIndex(order => order === sortBy)]
  }

  const [isPopUpOpen, setIsPopUpOpen] = useState(false)
  const orderRef = useRef()

  useEffect(() => {
    document.addEventListener('click', outsideClickHandler)
    return () => {
      document.removeEventListener('click', outsideClickHandler)
    }
  }, [])

  function togglePopUpOpen(value) {
    setIsPopUpOpen(value)
  }
  function outsideClickHandler(e) {
    if (!e.path.includes(orderRef.current)) {
      setIsPopUpOpen(false)
    }
  }
  return (
    <div ref={orderRef} className="categories__order">
      <div className="categories__wrapper">
        <button
          onClick={onOrderClick}
          className={orderDirection === 'desc'
            ? "categories__title categories__title_desc"
            : "categories__title"}
        >
          Cортировка&nbsp;по:
        </button>
        <button
          onClick={() => togglePopUpOpen(!isPopUpOpen)}
          className="categories__current-option"
        >
          {currentOption}
        </button>
      </div>
      {isPopUpOpen && <ul className="categories__order-list">
        {orderRus.map((value, index) => (
          <li key={value + index} className="categories__option">
            <button
              onClick={() => onSortByClick(orderEng[index])}
              className={sortBy === orderEng[index]
                ? "categories__button categories__button_active"
                : "categories__button"}
            >
              {value}
            </button>
          </li>
        ))}
      </ul>}
    </div>
  )
}

Order.propTypes = {
  sortBy: PropTypes.string.isRequired,
  orderDirection: PropTypes.string.isRequired,
  onOrderClick: PropTypes.func,
  onSortByClick: PropTypes.func
}

Order.defauldProps = {
  sortBy: 'rating',
  orderDirection: 'desc',
  onOrderClick: () => { },
  onSortByClick: () => { }
}