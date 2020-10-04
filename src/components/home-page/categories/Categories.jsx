import React from 'react'
import Button from './Button'
import Order from './Order'
import './categories.scss'

export default function Categories() {
  return (
    <>
      <nav className="categories">
        <ul className="categories__list">
          <Button active={true} />
          <Button />
          <Button />
          <Button />
          <Button />
          <Button />
          <Button />
          <Button />
        </ul>
        <Order />
      </nav>
      <h2 className="categories__current-category">Все пиццы</h2>
    </>
  )
}
