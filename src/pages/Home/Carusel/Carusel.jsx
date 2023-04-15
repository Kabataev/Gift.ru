import React, { useEffect, useState, Children, cloneElement } from "react";
import "./carusel.scss";
import arrowLeft from '../../../assets/img/arrow-left-icon.svg';
import arrowRight from '../../../assets/img/arrow-right-icon.svg';

const PAGE_WIDTH = 1350;

export const Carusel = ({ children }) => {
  const [pages, setPages] = useState([]);
  const [offset , setOffset] = useState(0);


  
  function handleLeftArrowClick(){
    setOffset((currentOffset) =>{
      // if(currentOffset > 0){
        //    currentOffset = 900;
        //   return currentOffset;
        // }
        const newOffset = currentOffset + PAGE_WIDTH;
        return Math.min(newOffset , 0);
      })
    }

    function handleRightArrowClick(){
      setOffset((currentOffset) =>{
        
        const maxOffset = -(PAGE_WIDTH * (pages.length - 1 ));

        if(currentOffset <= maxOffset){
          currentOffset = 0 ;
          return currentOffset;
        }
        const newOffset = currentOffset - PAGE_WIDTH;

        return  Math.max(newOffset , maxOffset);;
      })
    }

  useEffect(() => {
    setPages(
      Children.map(children, (child) => {
        return cloneElement(child, {
          style: {
            height: "100%",
            minWidth: `${PAGE_WIDTH}px`,
            maxWidth: `${PAGE_WIDTH}px`,
          },
        });
      })
    );
  }, []);

  return (
    <div className="carusel">
          <div onClick={handleLeftArrowClick} className="carusel__arrow-left">
            <img src={arrowLeft} alt="" />
          </div>
        <div className="carusel__window">
          <div className="carusel__all-items"
          style={
            {
              transform:`translate(${offset}px)`
            }
          }
          >{pages}</div>
        </div>
          <div onClick={handleRightArrowClick} className="carusel__arrow-right">
            <img src={arrowLeft} alt="" />
          </div>
      </div>
  );
};
