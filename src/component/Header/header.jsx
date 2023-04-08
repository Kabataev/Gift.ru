import "./header.scss";
import { NavLink } from "react-router-dom";
import headerLogo from "..//../assets/img/Logo-icon.svg";
import menuIcon from "..//../assets/img/menu-icon.svg";
import searchIcon from "..//../assets/img/search-icon.svg";
import userIcon from '..//../assets/img/user-icon.svg'
import favouritesProducts from '..//../assets/img/favourites-icon.svg'
import userLikes from '..//../assets/img/like-icon.svg'
import userBasket from '..//../assets/img/basket-icon.svg'

function Header() {
  return (
    <header className="header">
      <div className="header__inner-block-1">
        <ul className="header__links">
          <li className="header__link">
            <NavLink to="/delivery">Доставка</NavLink>
          </li>
          <li className="header__link">
            <NavLink to="/payment">Оплата</NavLink>
          </li>
          <li className="header__link">
            <NavLink to="/about">О нас</NavLink>
          </li>
          <li className="header__link">
            <NavLink to="/brands">Бренды</NavLink>
          </li>
          <li className="header__link">
            <NavLink to="/guarantee">Гарантии и возврат</NavLink>
          </li>
          <li className="header__link">
            <NavLink to="/contact">Контакты</NavLink>
          </li>
          <li className="header__link">
            <NavLink to="/help">Помощь</NavLink>
          </li>
        </ul>
        <ul className="header__email-phone">
          <li className="header__phone">
            <NavLink to="/phone">+74957556983</NavLink>
          </li>
          <li className="header__email">
            <NavLink to="/user">nonamemag@gmail.com</NavLink>
          </li>
        </ul>

        <ul className="header__registrations-entrance">
          <li className="header__entrance">
            <NavLink to="/enter">Войти</NavLink>
          </li>
          <p>/</p>
          <li className="registration">
            <NavLink to="/registration">Зарегистрироваться</NavLink>
          </li>
        </ul>
      </div>
      <div className="header__inner-block-2">
        <div className="header__logo">
          <NavLink to="/">
            <img src={headerLogo} alt="GIFT.RU logo" />
          </NavLink>
        </div>
        <div className="header__catalog">
          <button className="header__btn-catalog">
            <img src={menuIcon} alt="MenuIcon" />
            Каталог
          </button>
          <ul className="header__catalog-links">
            <li className="header__catalog-link">
              <NavLink to="/designer">Конструктор подарка</NavLink>
            </li>
            <li className="header__catalog-link">
              <NavLink to="/articles">Статьи</NavLink>
            </li>
          </ul>
        </div>
        <form className="header__catalog-form">
          <input
            type="text"
            placeholder="Поиск"
            className="header__search-text"
            />
          <button className="header__search-btn" type="button" >
            <img src={searchIcon} alt="" />
          </button>
        </form>
          <ul className="header__user-interface">
          <li className="header__user-profile">
              <NavLink to="/profile"><img src={userIcon} alt="" /></NavLink>
            </li>
            <li className="header__user-favourites-products">
              <NavLink to="/favoritesProducts"><img src={favouritesProducts} alt="" /></NavLink>
            </li>
            <li className="header__user-like">
              <NavLink to="/likes"><img src={userLikes} alt="" /></NavLink>
            </li>
            <li className="header__user-basket">
              <NavLink to="/basket  "><img src={userBasket} alt="" /></NavLink>
            </li>
          </ul>
      </div>
    </header>
  );
}

export default Header;
