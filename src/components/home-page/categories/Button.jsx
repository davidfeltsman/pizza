import React from 'react'

export default function Button({ active }) {
  return (
    <li className={active ? "categories__item_active" : "categories__item"}>Острые</li>
  )
}
