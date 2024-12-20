import Gallleryimage1 from '/Galleryimage/Gallery_1.jpg'
import Gallleryimage2 from '/Galleryimage/Gallery_2.jpg'
import Gallleryimage3 from "/Galleryimage/Gallery_3.jpg"
import Gallleryimage4 from "/Galleryimage/Gallery_4.jpg"
import Gallleryimage5 from "/Galleryimage/Gallery_5.jpg"
import Gallleryimage6 from "/Galleryimage/Gallery_6.jpg"
import Gallleryimage7 from '/Galleryimage/Gallery_7.jpg'
import Gallleryimage8 from "/Galleryimage/Gallery_8.jpg"
import Gallleryimage9 from '/Galleryimage/Gallery_9.jpg'
import Gallleryimage10 from "/Galleryimage/Gallery_10.jpg";
import Gallleryimage11 from "/Galleryimage/Gallery_11.jpg";
import Gallleryimage12 from "/Galleryimage/Gallery_12.jpg";
import "./ImageGallery.css"

const ImageGallery = () => {
    let GallleryData = [
      {
        id: 1,
        imgeSrc: Gallleryimage1,
      },
      {
        id: 2,
        imgeSrc: Gallleryimage2,
      },
      {
        id: 3,
        imgeSrc: Gallleryimage3,
      },
      {
        id: 4,
        imgeSrc: Gallleryimage4,
      },
      {
        id: 5,
        imgeSrc: Gallleryimage5,
      },
      {
        id: 6,
        imgeSrc: Gallleryimage6,
      },
      {
        id: 7,
        imgeSrc: Gallleryimage7,
      },
      {
        id: 8,
        imgeSrc: Gallleryimage8,
      },
      {
        id: 9,
        imgeSrc: Gallleryimage9,
      },
      {
        id: 10,
        imgeSrc: Gallleryimage10,
      },
      {
        id: 11,
        imgeSrc: Gallleryimage11,
        },
      {
        id: 12,
        imgeSrc: Gallleryimage12,
      }

    ];

    return (
      <>
            <div className="gallery-images">{GallleryData.map((item, index) => {
            
                return (
                    <div className='pics' key={index}>
                        <img src={item.imgeSrc} style={{width:'100%',marginLeft: '10px', marginTop: '10px'}}/>
                        </div>
            )
        })}</div>
      </>
    );
}

export default ImageGallery
