import React from 'react';
import Gallery from 'react-image-gallery';
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

  onImageClick(e) {
    const currentImageIndex = this.state.thumbnails.findIndex((i) => i.url === e.target.title);
    this.setState({
      currentImage: this.state.thumbnails[currentImageIndex],
      currentImageUrl: e.target.title,
    });
  }

  render() {
    return (
      <div>
        <img src={this.state.currentImageUrl} alt="" className="displayPhoto" />
        <Images images={this.state.thumbnails} onImageClick={this.onImageClick}/>
      </div>
    )
  }
}