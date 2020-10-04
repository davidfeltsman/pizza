import React from 'react';
import PizzaCard from './pizza-card/PizzaCard';
import './mainpizza.scss';

export default function MainPizza() {
  return (
    <section className="pizza-wrapper">
      <PizzaCard />
      <PizzaCard active={true} />
      <PizzaCard />
      <PizzaCard />
      <PizzaCard />
      <PizzaCard />
    </section>
  )
}
