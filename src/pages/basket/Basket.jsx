import React from 'react'
import BasketEmpty from '../../components/basket/BasketEmpty'
import BasketWithContent from '../../components/basket/BasketWithContent'
import './basket.scss'
import { useSelector } from 'react-redux'


export default function Basket() {

  const { items, totalPrice, totalCounter } = useSelector(({ basket: { items, totalPrice, totalCounter } }) => ({
    items,
    totalPrice,
    totalCounter
  }))

  return (
    <main className="basket">
      <BasketWithContent />
      <BasketEmpty />
    </main>
  )
}
