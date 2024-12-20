import './Myworks.css'
import { useState } from 'react';
import { cardDetails } from "./carousel-config";
import CarouselItem from "./CarouselItem";
import Forward from '../../assets/Forward.svg'
import Backward from "../../assets/Forward.svg";

const Myworks = () => {
  const [isActive, setActive] = useState(false);
    const [paused, setPaused] = useState(false);

  const handleClickNext = () => {
    console.log(isActive);
    if (!paused) {
      setPaused(true);
      setActive(true);
      setTimeout(() => {
        setPaused(false);
        setActive(false);
      }, 2000); // Resume after 3 seconds
    }
  };


 const handleClickPrev = () => {
  
 };
  return (
    <div className="Myworks-contanier">
      <div className="Myworks-header">My Works</div>
      <div className="Myworks-images">
        <div
          className={
            paused
              ? "carousel-track paused"
              : isActive
              ? "carousel-track forward-fast"
              : "carousel-track"
          }
        >
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
      <div className="Movement-button">
        <button
          onClick={handleClickPrev}
          className={isActive ? "backward-fast" : "backward"}
        >
          <img src={Forward} alt="backward-button"></img>
        </button>
        <button onClick={handleClickNext} className="forward">
          <img src={Backward} alt="forward-button"></img>
        </button>
      </div>
    </div>
  );
}

export default Myworks

