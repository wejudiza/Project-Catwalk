import React from 'react';
import Images from './Images';
import ExpandedView from './ExpandedView'

export default class ImageGallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      thumbnails: [],
      currentImage: {},
      currentImageUrl: '',
      currentImageIndex: 0,
      showModal: false,
    };
    this.onImageClick = this.onImageClick.bind(this);
    this.onRightArrowClick = this.onRightArrowClick.bind(this);
    this.onLeftArrowClick = this.onLeftArrowClick.bind(this);
    this.onDisplayPhotoClick = this.onDisplayPhotoClick.bind(this);
    this.handleModal = this.handleModal.bind(this);
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

  handleModal() {
    this.setState({
      showModal: !this.state.showModal,
    });
  }

  onDisplayPhotoClick() {
    this.setState({
      showModal: true,
    })
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
      // const images = this.state.thumbnails.map((thumbnail, index) => (
      //   thumbnail.url
      // ));
      const lastIndex = this.state.thumbnails.length - 1;
      return (
        <div id="main">
          <div id="imageGalleryContainer">
            <img
              src={this.state.currentImageUrl}
              alt=""
              className="displayPhoto"
              onClick={this.onDisplayPhotoClick}
            />

            {this.state.showModal
            && (
            <ExpandedView
              currentImageUrl={this.state.currentImageUrl}
              thumbnails={this.state.thumbnails}
              currentImage={this.state.currentImage}
              currentImageIndex={this.state.currentImageIndex}
              onLeftArrowClick={this.onLeftArrowClick}
              onRightArrowClick={this.onRightArrowClick}
              onImageClick={this.onImageClick}
              handleModal={this.handleModal}
            />
            )}

            <div className="overlay">
              <Images
                images={this.state.thumbnails}
                onImageClick={this.onImageClick}
                currentImage={this.state.currentImage}
                currentImageIndex={this.state.currentImageIndex}
              />
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
