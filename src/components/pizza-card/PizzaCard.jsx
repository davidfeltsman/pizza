import React, { useState } from 'react'
import PlusIcon from '../../assets/img/plus.svg'
import PropTypes from 'prop-types'
import SmallPizzaIcon from '../../assets/img/star.svg'

export default function PizzaCard({ params: { imageUrl, name, price, sizes, types, rating } }) {

  const [activeType, setActiveType] = useState(types[0])
  const [activeSize, setActiveSize] = useState(sizes[0])

  return (
    <div className="pizza-card">
      <div className="pizza-card__rating">
        <span className="pizza-card__rating-value">{rating}/10</span>
        <img src={SmallPizzaIcon} alt="Rating" className="pizza-card__rating-img" />
      </div>
      <img src={imageUrl} alt={name} className="pizza-card__image" />
      <h3 className="pizza-card__title">{name}</h3>
      <div className="pizza-card__options">
        <ul className="pizza-card__thickness">
          {types.map(type => (
            <li key={"type-" + type}>
              <button
                type="button"
                className={activeType === type ? "pizza-card__option pizza-card__option_active" : "pizza-card__option"}
                onClick={() => setActiveType(type)}
              >
                {type ? "традиционное" : "тонкое"}
              </button>
            </li>))}
        </ul>
        <ul className="pizza-card__size">
          {sizes.map(size => (
            <li key={"size" + size}>
              <button
                type="button"
                className={activeSize === size ? "pizza-card__option pizza-card__option_active" : "pizza-card__option"}
                onClick={() => setActiveSize(size)}
              >{size} см.
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div className="pizza-card__footer">
        <span className="pizza-card__price">от {price} ₽</span>
        <button className="pizza-card__add-button"><img className="pizza-card__add-button-icon" src={PlusIcon} alt="+" /> Добавить <span className=" pizza-card__counter">2</span></button>
      </div>
    </div>
  )
}

PizzaCard.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  sizes: PropTypes.array.isRequired,
  types: PropTypes.array.isRequired,
  rating: PropTypes.number.isRequired
}

PizzaCard.defaultProps = {
  imageUrl: "https://img.icons8.com/ios/452/pizza.png",
  name: "Пицца",
  price: 0,
  sizes: [],
  types: [],
  rating: 0
}