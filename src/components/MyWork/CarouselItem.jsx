/* eslint-disable react/prop-types */
export default function CarouselItem({ imgUrl, imgTitle, detailKey }) {
  return (
    <div className="carousel-card">
      <img className="images" src={imgUrl} alt={imgTitle} key={detailKey}></img>
    </div>
  );
}
