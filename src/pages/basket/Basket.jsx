import React from 'react'
import BasketEmpty from '../../components/basket/BasketEmpty'
import BasketWithContent from '../../components/basket/BasketWithContent'
import './basket.scss'


export default function Basket() {
  return (
    <main className="basket">
      <BasketWithContent />
      <BasketEmpty />
    </main>
  )
}
