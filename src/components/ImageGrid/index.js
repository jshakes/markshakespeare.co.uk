import React, { Component } from 'react';
import Lightbox from 'react-images';

const images = [
  {
    src: '/images/1.jpg'
  },
  {
    src: '/images/2.jpg'
  },
  {
    src: '/images/3.jpg'
  },
  {
    src: '/images/4.jpg'
  },
  {
    src: '/images/5.jpg'
  },
  {
    src: '/images/6.jpg'
  },
  {
    src: '/images/7.jpg'
  },
  {
    src: '/images/8.jpg'
  },
  {
    src: '/images/9.jpg'
  },
  {
    src: '/images/10.jpg'
  },
  {
    src: '/images/11.jpg'
  },
  {
    src: '/images/12.jpg'
  }
];

class ImageGrid extends Component {
  
  state = {
    lightboxIsOpen: false,
    currentImage: 0
  }
  
  openLightbox(image = 0) {
    this.setState({
      lightboxIsOpen: true,
      currentImage: image
    });
  }
  
  closeLightbox() {
    this.setState({
      lightboxIsOpen: false      
    });
  }
  
  gotoNext() {
    this.setState({
      currentImage: this.state.currentImage + 1
    });
  }
  
  gotoPrevious() {
    this.setState({
      currentImage: this.state.currentImage - 1
    });
  }
  
  renderGallery() {
    return (
      <ul className="image-gallery__items">
        {images.map(this.renderGalleryItem.bind(this))}
      </ul>
    );
  }
  
  renderGalleryItem(image, index) {
    return (
      <li className="image-gallery__item" key={index}>
        <img src={image.src} onClick={() => this.openLightbox(index)} className="image-gallery__image" />;
      </li>
    );
  }
  
  render() {
    return (
      <div className="image-gallery">
        {this.renderGallery()}
        <Lightbox
          images={images}
          onClose={this.closeLightbox.bind(this)}
          isOpen={this.state.lightboxIsOpen}
          currentImage={this.state.currentImage}
          onClickNext={this.gotoNext.bind(this)}
          onClickPrev={this.gotoPrevious.bind(this)}
        />
      </div>
    );
  }
};

export default ImageGrid;
