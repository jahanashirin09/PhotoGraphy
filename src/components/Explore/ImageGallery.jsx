import GallleryData from "./GallleryData";
import "./ImageGallery.css";
import { useEffect, useState } from "react";

const ImageGallery = () => {
  const [tag, setTag] = useState("all");
  const [filteredImage, setFilteredImages] = useState([]);
  const [activeTag, setActiveTag] = useState("all");
  const [noOfElement, setNoOfElement] = useState(12);
  const Slice = filteredImage.slice(0, noOfElement);
  const handleTagClick = (selectedTag) => {
    setTag(selectedTag);
    setActiveTag(selectedTag);
  };
  const loadMore = () => {
    setNoOfElement(noOfElement + noOfElement);
  };
  useEffect(() => {
    tag === "all"
      ? setFilteredImages(GallleryData)
      : setFilteredImages(GallleryData.filter((data) => data.tag === tag));
  }, [tag]);
  return (
    <>
      <div className="filter-components">
        <button
          className={activeTag === "all" ? "tagactive" : "tag"}
          onClick={() => handleTagClick("all")}
        >
          ALL
        </button>
        <button
          className={activeTag === "lifeStyle" ? "tagactive" : "tag"}
          onClick={() => handleTagClick("lifeStyle")}
        >
          LIFESTYLE
        </button>
        <button
          className={activeTag === "nature" ? "tagactive" : "tag"}
          onClick={() => handleTagClick("nature")}
        >
          NATURE
        </button>
        <button
          className={activeTag === "food" ? "tagactive" : "tag"}
          onClick={() => handleTagClick("food")}
        >
          FOOD
        </button>
        <button
          className={activeTag === "sports" ? "tagactive" : "tag"}
          onClick={() => handleTagClick("sports")}
        >
          SPORTS
        </button>
        <button
          className={activeTag === "portrait" ? "tagactive" : "tag"}
          onClick={() => handleTagClick("portrait")}
        >
          PORTRAIT
        </button>
      </div>
      <div className="gallery-images">
        {Slice.map((item, index) => {
          return (
            <div className="pics" key={index}>
              <img
                src={item.imgeSrc}
                style={{
                  width: "100%",
                  marginLeft: "10px",
                  marginTop: "10px",
                }}
              />
            </div>
          );
        })}
      </div>

      <div className="more-option">
        <div className="blur"></div>
        <button className="loadMorebtn" onClick={() => loadMore()}>
          Load More
        </button>
      </div>
    </>
  );
};

export default ImageGallery;
