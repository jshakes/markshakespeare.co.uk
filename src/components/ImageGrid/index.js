import React, { Component } from 'react';
import Lightbox from 'react-images';

const images = [
  {
    src: '/images/artwork/1.jpg'
  },
  {
    src: '/images/artwork/2.jpg'
  },
  {
    src: '/images/artwork/3.jpg'
  },
  {
    src: '/images/artwork/4.jpg'
  },
  {
    src: '/images/artwork/5.jpg'
  },
  {
    src: '/images/artwork/6.jpg'
  },
  {
    src: '/images/artwork/7.jpg'
  },
  {
    src: '/images/artwork/8.jpg'
  },
  {
    src: '/images/artwork/9.jpg'
  },
  {
    src: '/images/artwork/10.jpg'
  },
  {
    src: '/images/artwork/11.jpg'
  },
  {
    src: '/images/artwork/12.jpg'
  }
];

class ImageGrid extends Component {
  
  state = {
    lightboxIsOpen: false,
    currentImage: 0
  }
  
  componentWillMount() {
    const limit = this.props.limit;
    this.setState({ images: limit ? images.slice(0, limit) : images });
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
        {this.state.images.map(this.renderGalleryItem.bind(this))}
      </ul>
    );
  }
  
  renderGalleryItem(image, index) {
    return (
      <li className="image-gallery__item" key={index}>
        <img src={image.src} onClick={() => this.openLightbox(index)} className="image-gallery__image" />
      </li>
    );
  }
  
  render() {
    return (
      <div className="image-gallery">
        {this.renderGallery()}
        <Lightbox
          images={this.state.images}
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
