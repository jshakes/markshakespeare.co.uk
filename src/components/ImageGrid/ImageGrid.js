import React, { useState } from 'react';
import Img from 'gatsby-image';
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

function ImageGrid(props) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(null);

  return (
    <div className="image-gallery">
      <ul className="image-gallery__items">
        {props.images.map( (image, index) => (
            <li className="image-gallery__item" key={index} onClick={() => {
                setLightboxOpen(true);
                setCurrentSlideIndex(index)
            }}>
              <Img fixed={image.thumbnail} alt={image.caption} className="image-gallery__image" />
            </li>
        ) )}
      </ul>
      <Lightbox
        slides={props.images.map(image => image.large)}
        close={() => setLightboxOpen(false)}
        open={lightboxOpen}
        index={currentSlideIndex}
      />
    </div>
  );
};

export default ImageGrid;
