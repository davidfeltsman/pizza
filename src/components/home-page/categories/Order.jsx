import React from 'react'

export default function Order() {

  return (
    <div className="categories__order">
      <div className="categories__wrapper">
        <button className="categories__title">Cортировка&nbsp;по:</button>
        <button className="categories__current-option">популярности</button>
      </div>
      <ul className="categories__order-list">
        <li className="categories__option"><button className="categories__button categories__button_active">популярности</button></li>
        <li className="categories__option"><button className="categories__button">цене</button></li>
        <li className="categories__option"><button className="categories__button">алфавиту</button></li>
      </ul>
    </div >
  )
}
