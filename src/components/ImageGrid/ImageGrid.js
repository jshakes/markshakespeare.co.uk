import React, { Component } from 'react';
import Lightbox from 'react-images';
import Img from 'gatsby-image';

const PERMALINK_PREFIX = 'gallery-image-';

class ImageGrid extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      lightboxIsOpen: false,
      currentImage: 0
    };
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
    }, () => {
      window.location.hash = '';
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
    const { images } = this.props;
    return (
      <ul className="image-gallery__items">
        {images.map( this.renderGalleryItem.bind(this) )}
      </ul>
    );
  }
  
  renderGalleryItem(image, index) {
    return (
      <li className="image-gallery__item" key={index} onClick={() => this.openLightbox(index)}>
        <Img resolutions={image.thumbnail} className="image-gallery__image" />
      </li>
    );
  }
  
  render() {
    const largeImages = this.props.images.map( ( { caption, large } ) => ( {
      ...large,
      caption,
    } ) );

    return (
      <div className="image-gallery">
        {this.renderGallery()}
        <Lightbox
          images={largeImages}
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
