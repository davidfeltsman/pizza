import React from 'react'
import { Link } from 'react-router-dom'
import BusketItem from './BusketItem'
import { ReactComponent as BasketLogo } from '../../assets/img/cart.svg'
import { ReactComponent as Trash } from '../../assets/img/trash.svg'
import { ReactComponent as BasketArrow } from '../../assets/img/grey-arrow-left.svg'

export default function BasketWithContent() {
  return (
    <>
      <div className="basket__header">
        <div className="basket__logo">
          <BasketLogo className="basket__img" />
          <h2 className="basket__title">Корзина</h2>
        </div>
        <button className="basket__clear">
          <Trash className="basket__clear-icon" />
          <span className="basket__clear-text">Очистить корзину</span>
        </button>
      </div>
      <div className="basket__content">
        <BusketItem />
        <BusketItem />
      </div>
      <div className="basket__total-result">
        <p className="basket__total-title">Всего пицц: <span className="basket__total-amount">3</span></p>
        <p className="basket__total-title">Сумма заказа: <span className="basket__total-amount">900 ₽</span></p>
      </div>
      <div className="basket__buttons">
        <Link className="basket__buttons-back" to="/"><BasketArrow /> Вернуться назад</Link>
        <button className="basket__buttons-submit">Оплатить сейчас</button>
      </div>
    </>
  )
}
