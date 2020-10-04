import React from 'react'

export default function Button({ active }) {
  return (
    <li className="categories__item">
      <button className={active ? "categories__link categories__link_active" : "categories__link"}>Острые</button>
    </li>
  )
}
