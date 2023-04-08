import { NavLink } from "react-router-dom";
import "./entrance.scss";
import eyePassword from '..//../assets/img/eye-password-icon.svg'

function Entrance() {
  return (
    <div className="enter">
      <form className="enter__form">
        <h1>Вход</h1>
        <div className="enter__inputbox">
          <input
            className="enter__input input"
            type="email number"
            placeholder="Номер телефона или электронная почта"
          />
        </div>
        <div className="enter__inputbox">
          <input className="input" type="password" placeholder="Пароль" />
          <img className="enter__eye-img" src={eyePassword} alt="Посмотреть пароль" />
        </div>
        <button className="enter__btn" type="button">
          Войти
        </button>
        <div className="enter__enterbox">
          <NavLink to="/registration">Или зарегистрироваться</NavLink>
        </div>
        <div className="enter__forget-password">
          <NavLink to='/recovery'>Забыли пароль?</NavLink>
        </div>
      </form>
    </div>
  );
}

export default Entrance;
