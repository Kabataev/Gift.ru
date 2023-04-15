import { Carusel } from "./Carusel/Carusel";
import caruselImg1 from "../../assets/img/carusel-img/img-carusel-1.png";
import caruselImg2 from "../../assets/img/carusel-img/img-carusel-2.png";
import "./home.scss";

function Home() {
  return (
    <main className="home">
      <div className="home__container">
        <Carusel>
          <div className="home__carusel-block">
            <div className="home__carusel-text-content">
              <h2 className="home__carusel-title">
                Безусловно, теория требует одобрения
              </h2>
              <p className="home__carusel-text">
                Господа, высокотехнологичная концепция общественного уклада не
                даёт нам иного выбора, кроме определения форм
              </p>
              <button type="button" className="home__carusel-btn">
                Узнать больше
              </button>
            </div>
            <div className="home__carusel-img-content">
              <img src={caruselImg1} alt="" />
            </div>
          </div>
          
          <div className="home__carusel-block">
            <div className="home__carusel-text-content">
              <h2 className="home__carusel-title">
                Безусловно, теория требует одобрения
              </h2>
              <p className="home__carusel-text">
                Господа, высокотехнологичная концепция общественного уклада не
                даёт нам иного выбора, кроме определения форм
              </p>
              <button type="button" className="home__carusel-btn">
                Узнать больше
              </button>
            </div>
            <div className="home__carusel-img-content">
              <img src={caruselImg2} alt="" />
            </div>
          </div>
        </Carusel>
      </div>
    </main>
  );
}

export default Home;
