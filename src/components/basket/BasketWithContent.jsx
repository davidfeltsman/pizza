import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import BusketItem from './BusketItem'
import { ReactComponent as BasketLogo } from '../../assets/img/cart.svg'
import { ReactComponent as Trash } from '../../assets/img/trash.svg'
import { ReactComponent as BasketArrow } from '../../assets/img/grey-arrow-left.svg'
import { useDispatch } from 'react-redux'
import { clearBasket } from '../../redux/actions/actionCreators'

export default function BasketWithContent({ basket: { items, totalPrice, totalCounter } }) {

  const dispatch = useDispatch()
  function clearBasketHandler() {
    dispatch(clearBasket())
  }
  return (
    <>
      <div className="basket__header">
        <div className="basket__logo">
          <BasketLogo className="basket__img" />
          <h2 className="basket__title">Корзина</h2>
        </div>
        <button onClick={clearBasketHandler} className="basket__clear">
          <Trash className="basket__clear-icon" />
          <span className="basket__clear-text">Очистить корзину</span>
        </button>
      </div>
      <div className="basket__content">
        {items.map((item, index) => <BusketItem key={'Busket item' + index} item={item} index={index} />)}
      </div>
      <div className="basket__total-result">
        <p className="basket__total-title">Всего пицц: <span className="basket__total-amount">{totalCounter}</span></p>
        <p className="basket__total-title">Сумма заказа: <span className="basket__total-amount">{totalPrice} ₽</span></p>
      </div>
      <div className="basket__buttons">
        <Link className="basket__buttons-back" to="/"><BasketArrow /> Вернуться назад</Link>
        <button className="basket__buttons-submit">Оплатить сейчас</button>
      </div>
    </>
  )
}

BasketWithContent.propTypes = {
  items: PropTypes.array,
  totalCounter: PropTypes.number.isRequired,
  totalPrice: PropTypes.number.isRequired,
}

BasketWithContent.defaultProps = {
  items: [],
  totalCounter: 0,
  totalPrice: 0,
}
