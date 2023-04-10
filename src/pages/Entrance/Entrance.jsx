import { NavLink } from "react-router-dom";
import { useState } from "react";
import "./entrance.scss";
import eyePassword from "..//../assets/img/eye-password-icon.svg";

function Entrance() {
  const [password, setPassword] = useState("");

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleTogglePassword = (event) => {
    const passwordInput = document.getElementById("password-input");
    if (passwordInput.type === "password") {
      passwordInput.type = "text";
    } else {
      passwordInput.type = "password";
    }
  };

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
          <input
            id="password-input"
            className="input"
            type="password"
            placeholder="Пароль"
            value={password}
            onChange={handlePasswordChange}
          />
          <span onClick={handleTogglePassword} className="pass-icon">
            <img
              className="enter__eye-img"
              src={eyePassword}
              alt="Посмотреть пароль"
            />
          </span>
        </div>
        <button className="enter__btn" type="button">
          Войти
        </button>
        <div className="enter__enterbox">
          <NavLink to="/registration">Или зарегистрироваться</NavLink>
        </div>
        <div className="enter__forget-password">
          <NavLink to="/recovery">Забыли пароль?</NavLink>
        </div>
      </form>
    </div>
  );
}

export default Entrance;
