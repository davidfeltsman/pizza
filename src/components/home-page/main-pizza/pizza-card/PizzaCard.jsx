import React from 'react'
import PizzaTest from './pizzaTest.png';
import PlusIcon from '../../../../assets/img/plus.svg';

export default function PizzaCard({ active }) {
  return (
    <div className="pizza-card">
      <img src={PizzaTest} alt="Pizza" className="pizza-card__image" />
      <h3 className="pizza-card__title">Чизбургер пицца</h3>
      <div className="pizza-card__options">
        <ul className="pizza-card__thickness">
          <li><button type="button" className="pizza-card__option pizza-card__option_active">тонкое</button></li>
          <li><button type="button" className="pizza-card__option">традиционное</button></li>
        </ul>
        <ul className="pizza-card__size">
          <li><button type="button" className="pizza-card__option pizza-card__option_active">26 см.</button></li>
          <li><button type="button" className="pizza-card__option">30 см.</button></li>
          <li><button type="button" className="pizza-card__option">40 см.</button></li>
        </ul>
      </div>
      <div className="pizza-card__footer">
        <span className="pizza-card__price">от 395 ₽</span>
        <button className="pizza-card__add-button"><img className="pizza-card__add-button-icon" src={PlusIcon} alt="+" /> Добавить <span className=" pizza-card__counter">2</span></button>
      </div>
    </div>
  )
}
