import './Explore.css'
import ImageGallery from './ImageGallery';
const Explore = () => {
  return (
    <div className="Explore-container">
      <div className="Explore-Heading">
        <h1 className='Explore-text'>Explore</h1>
          </div>
          <div className='gallery'>
              <ImageGallery/>
          </div>
    </div>
  );
}

export default Explore