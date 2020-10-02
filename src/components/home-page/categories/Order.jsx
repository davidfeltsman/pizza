import React from 'react'

export default function Order() {
  return (
    <div className="categories__orderBlock">
      <a className="categories__title">Cортировка по:</a>
      <a className="categories__currentOption">популярности</a>
      <select className="categories__order" name="order">
        <option className="categories__option" value="popularity">популярности</option>
        <option className="categories__option" value="price">цене</option>
        <option className="categories__option" value="alphabet">алфавиту</option>
      </select>
    </div>
  )
}
