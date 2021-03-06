import React from 'react';
import Images from './Images';
// import ImageCarousel from './ImageCarousel';

export default class ImageGallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      thumbnails: [],
      currentImage: {},
      currentImageUrl: '',
      currentImageIndex: 0,
    };
    this.onImageClick = this.onImageClick.bind(this);
    this.onRightArrowClick = this.onRightArrowClick.bind(this);
    this.onLeftArrowClick = this.onLeftArrowClick.bind(this);
  }

  componentDidMount() {
    this.setState({
      thumbnails: this.props.images,
      currentImage: this.props.images[0],
      currentImageUrl: this.props.images[0].url,
    });
  }

  componentDidUpdate(prevProps) {
    if (this.props.images !== prevProps.images) {
      this.setState({
        thumbnails: this.props.images,
        currentImage: this.props.images[0],
        currentImageUrl: this.props.images[0].url,
        currentImageIndex: 0,
      });
    }
  }

  onImageClick(e) {
    const clickedImageIndex = this.state.thumbnails.findIndex((i) => i.url === e.target.title);
    this.setState({
      currentImage: this.state.thumbnails[clickedImageIndex],
      currentImageUrl: e.target.title,
      currentImageIndex: clickedImageIndex,
    });
  }

  onRightArrowClick(index) {
    this.setState({
      currentImage: this.state.thumbnails[index + 1],
      currentImageUrl: this.state.thumbnails[index + 1].url,
      currentImageIndex: this.state.currentImageIndex + 1,
    });
  };

  onLeftArrowClick(index) {
    this.setState({
      currentImage: this.state.thumbnails[index - 1],
      currentImageUrl: this.state.thumbnails[index - 1].url,
      currentImageIndex: this.state.currentImageIndex - 1,
    });
  };

  render() {
    if (this.state.thumbnails.length !== 0) {
      const lastIndex = this.state.thumbnails.length - 1;
      return (
        <div id="main">
          <div id="imageGalleryContainer">
            <img
              src={this.state.currentImageUrl}
              alt=""
              className="displayPhoto"
            />

            {/* <ImageCarousel
              images={this.state.thumbnails}
              onImageClick={this.onImageClick}
              currentImage={this.state.currentImage}
            /> */}
            <div className="overlay">
              <Images
                images={this.state.thumbnails}
                onImageClick={this.onImageClick}
                currentImage={this.state.currentImage}
              />
              {/* <i className="fas fa-chevron-down" id="downArrow" /> */}
            </div>
            {this.state.currentImage.url === this.state.thumbnails[0].url
              ? null
              : <i className="fas fa-arrow-left" id="leftArrow" onClick={() => this.onLeftArrowClick(this.state.currentImageIndex)} />}
            {this.state.currentImage.url === this.state.thumbnails[lastIndex].url
              ? null
              : <i className="fas fa-arrow-right" id="rightArrow" onClick={() => this.onRightArrowClick(this.state.currentImageIndex)} />}
            <i className="fas fa-expand" id="expand" />
          </div>
        </div>
      );
    }
    return (
      <div>
        Loading Images...
      </div>
    );
  }
}
