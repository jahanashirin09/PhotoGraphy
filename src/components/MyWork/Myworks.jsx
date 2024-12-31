import './Myworks.css'
import { useState } from 'react';
import { cardDetails } from "./carousel-config";
import CarouselItem from "./CarouselItem";
import { ArrowGray } from "../../assets/ArrowGray";
import { ArrowWhite } from "../../assets/ArrowWhite";


const Myworks = () => {
   const [isForwardHovered, setIsForwardHovered] = useState(false);
   const [isBackwardHovered, setIsBackwardHovered] = useState(false);
  const onPrevClick = () => {
    
  }
  const onNextClick = () => {
    
  } 
  return (
    <div id="Myworks-contanier">
      <div className="Myworks-header">My Works</div>
      <div className="Myworks-images">
        <div className="carousel-track">
          {Object.keys(cardDetails).map((detailKey) => {
            return (
              <CarouselItem
                key={detailKey}
                imgUrl={cardDetails[detailKey].imgUrl}
                // imgTitle={cardDetails[detailKey].title}
              ></CarouselItem>
            );
          })}
          {Object.keys(cardDetails).map((detailKey) => {
            return (
              <CarouselItem
                key={detailKey}
                imgUrl={cardDetails[detailKey].imgUrl}
                // imgTitle={cardDetails[detailKey].title}
              ></CarouselItem>
            );
          })}
        </div>
      </div>
      <div className="movement-container">
        <button
          className="movement-button"
          onMouseEnter={() => setIsBackwardHovered(true)}
          onMouseLeave={() => setIsBackwardHovered(false)}
          onClick={onPrevClick}
        >
          <div className="backward-arrow">
            {isBackwardHovered ? <ArrowWhite /> : <ArrowGray />}
          </div>
        </button>
        <button
          className="movement-button"
          onMouseEnter={() => setIsForwardHovered(true)}
          onMouseLeave={() => setIsForwardHovered(false)}
          onClick={onNextClick}
        >
          <div className="forward-arrow">
            {isForwardHovered ? <ArrowWhite /> : <ArrowGray />}
          </div>
        </button>
      </div>
    </div>
  );
}

export default Myworks

