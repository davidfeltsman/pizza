import React from 'react';
import BusketItem from './BusketItem';
import BasketLogo from './cart.svg';

export default function Basket() {
  return (
    <main className="basket">
      <div className="basket__header">
        <div className="basket__logo">
          <img src={BasketLogo} alt="Basket" className="basket__img" />
          <h2 className="basket__title">Корзина</h2>
        </div>
        <button className="basket__clear">
          <img src="" alt="" className="busket__clear-icon" />
          <span className="busket__clear-text">Очистить корзину</span>
        </button>
        <div className="busket__content">
          <BusketItem />
        </div>
      </div>
    </main>
  )
}
