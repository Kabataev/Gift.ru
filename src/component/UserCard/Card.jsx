import "./sass/card.scss";
import userImg from "..//../assets/img/image-victor.jpg";
const card = (props) => {
  function handleClick(e) {
    console.log(e);
  }

  function handleMouseEnter() {
    console.log("hi enter");
  }

  function handleMouseLeave() {
    console.log("bye leave");
  }

  return (
    <div className="card">
      <div className="card__info">
        <img className="card__img" src={userImg} alt="Victor" />
      </div>
      <div className="card__user">
        <h1 className="card__name">{props.userName}</h1>
        <span className="card__age">{props.userAge}</span>
      </div>
      <p className="card__location">{props.location}</p>
      <div className="card__stat">
        <div className="card__stat-inner">
          <div className="card__item">
            <p className="card__stat-count">{props.followers}</p>
            <span className="card__stat-descr">Followers</span>
          </div>
          <div className="card__item">
            <p className="card__stat-count">{props.like}</p>
            <span className="card__stat-descr">Like</span>
          </div>
          <div className="card__item">
            <p className="card__stat-count">{props.photos}</p>
            <span className="card__stat-descr">Photos</span>
          </div>
        </div>
        <button
          onClick={handleClick}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          Click
        </button>
      </div>
    </div>
  );
};

export default card;
