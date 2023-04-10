import React from "react";
import "./carusel.scss";

function Carusel() {
  return (
    <div className="carusel">
      <div className="carusel__inner">
        <div className="carusel__window">
          <div className="carusel__all-items">
            <div className="carusel__item item-1">item 1</div>
            <div className="carusel__item item-2">item 2</div>
            <div className="carusel__item item-3">item 3</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Carusel;
