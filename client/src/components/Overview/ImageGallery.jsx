import React from 'react';
import Images from './Images';

export default class ImageGallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      thumbnails: [],
      currentImage: {},
      currentImageUrl: '',
    };
    this.onImageClick = this.onImageClick.bind(this);
  }

  componentDidMount() {
    this.setState({
      thumbnails: this.props.images,
      currentImage: this.props.images[0],
      currentImageUrl: this.props.images[0].url,
    })
  }

  componentDidUpdate(prevProps) {
    if (this.props.images !== prevProps.images) {
      this.setState({
        thumbnails: this.props.images,
        currentImage: this.props.images[0],
        currentImageUrl: this.props.images[0].url,
      })
    }
  }

  onImageClick(e) {
    const currentImageIndex = this.state.thumbnails.findIndex((i) => i.url === e.target.title);
    this.setState({
      currentImage: this.state.thumbnails[currentImageIndex],
      currentImageUrl: e.target.title,
    });
  }

  render() {
    return (
      <div id="main">
        <div id="imageGalleryContainer">
          <img
            src={this.state.currentImageUrl}
            alt=""
            className="displayPhoto"
          />

          <div className="overlay">
            <Images
              images={this.state.thumbnails}
              onImageClick={this.onImageClick}
              currentImage={this.state.currentImage}
            />
            <i className="fas fa-chevron-down" id="downArrow" />
          </div>

          <i className="fas fa-arrow-right" id="rightArrow" />
          <i className="fas fa-arrow-left" id="leftArrow" />
          <i className="fas fa-expand" id="expand" />
        </div>
      </div>
    )
  }
}
