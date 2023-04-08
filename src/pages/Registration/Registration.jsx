import "./registration.scss";
import { NavLink } from "react-router-dom";

function Registration() {
  return (
    <div className="registr">
      <form className="registr__form">
        <h1>Регистрация</h1>
        <div className="registr__inputbox">
          <input
            className="registr__input input"
            type="text"
            placeholder="Имя или номер телефона"
          />
        </div>
        <div className="registr__inputbox">
          <input className="input" type="email" placeholder="E-mail" />
        </div>
        <button className="registr__btn" type="button">
          Зарегистрироваться
        </button>
        <div className="registr__enterbox">
        <NavLink to="/enter">Или выполнить вход</NavLink>
        </div>
      </form>
    </div>
  );
}

export default Registration;
