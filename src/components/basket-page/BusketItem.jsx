import React from 'react';

export default function BusketItem() {
  return (
    <div className="basket__pizza-block">
      <img src="" alt="" className="basket__pizza-img" />
      <div className="basket__pizza-content">
        <h3 className="basket__pizza-title">Сырный цыпленок</h3>
        <p className="basket__pizza-info">толстое тесто, 26 см.</p>
      </div>
      <div className="basket__counter-block">
        <button className="basket__pizza-minus">-</button>
        <span className="basket__pizza-counter">1</span>
        <button className="basket__pizza-plus">+</button>
      </div>
      <strong className="basket__pizza-price">770 ₽</strong>
      <button className="basket__pizza-remove">x</button>
    </div>
  )
}
