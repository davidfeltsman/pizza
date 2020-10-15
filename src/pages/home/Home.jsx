import React from 'react'
import Categories from '../../components/categories/Categories'
import MainPizza from '../../components/main-pizza/MainPizza'
import Loader from '../../components/loader/Loader'
import _ from 'lodash'
import { useSelector } from 'react-redux'

export default function Home() {

  const { items, isLoading, category, sortBy, orderDirection } = useSelector(({ pizzas: { items, isLoading }, filters: { category, sortBy, orderDirection } }) => ({
    items,
    isLoading,
    category,
    sortBy,
    orderDirection
  }));

  const filteredItems = category === null
    ? _.orderBy(items, sortBy, orderDirection)
    : _
      .chain(items)
      .filter({ category })
      .orderBy(sortBy, orderDirection)
      .value()

  return (
    <main className="main-content">
      <Categories
        activeCategory={category}
        orderDirection={orderDirection}
        sortBy={sortBy}
      />
      {isLoading
        ? <Loader />
        : <MainPizza items={filteredItems} />}
    </main>
  )
}


// Проптайпсы
// Приступить к корзине