import "./recovery.scss";

function Recovery() {
  return (
    <div className="recovery">
      <form className="recovery__form">
        <h1>Восстановление пароля</h1>
        <div className="recovery__inputbox">
          <input
            className="recovery__input input"
            type="email number"
            placeholder="Номер телефона или электронная почта"
          />
        </div>
        <button className="recovery__btn" type="button">
          Восстановить
        </button>
        <p>
          Проверьте почту, вам прийдет имейл в котором вы сможете сменить пароль
        </p>
      </form>
    </div>
  );
}

export default Recovery;
