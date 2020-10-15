import React from 'react'
import PizzaCard from '../pizza-card/PizzaCard'
import PropTypes from 'prop-types'
import './mainpizza.scss'

export default function MainPizza({ items }) {

  return (
    <section className="pizza-wrapper">
      {items.map(item => <PizzaCard key={'pizza' + item.id} params={item} />
      )}
    </section>
  )
}

MainPizza.propTypes = {
  items: PropTypes.array,
}

MainPizza.defauldProps = {
  items: []
}