import React from 'react';
import Categories from './categories/Categories';
import MainPizza from './main-pizza/MainPizza';

export default function Home() {
  return (
    <main className="main-content">
      <Categories />
      <MainPizza />
    </main>
  )
}
