import React from 'react';
import PizzaLogo from '../../assets/img/pizza-logo.svg';
import { Link } from 'react-router-dom';
import './header.scss';

export default function Header() {
  return (
    <header className="header">
      <div className="header__logo">
        <img className="header__img" src={PizzaLogo} alt="Pizza Logo" />
        <div className="header__title">
          <h1 className="header__main-title">Hello Pizza</h1>
          <span className="header__sub-title">вкуснейшая пицца города</span>
        </div>
      </div>
      <Link className="header__busket-link" to="/basket">
        <span className="header__total-price">500 ₽</span>
        <span className="header__total-purchases">3</span>
      </Link>
    </header>
  )
}
