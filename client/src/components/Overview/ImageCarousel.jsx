import React from 'react';
import Images from './Images';

export default class ImageCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      thumbnails: [],
    };
  }

  componentDidMount() {
    this.setState({
      thumbnails: this.props.images,
    });
  }

  componentDidUpdate(prevProps) {
    if (this.props.images !== prevProps.images) {
      this.setState({
        thumbnails: this.props.images,
      });
    }
  }

  render() {
    return (
      <>
        <div className="overlay">
          <Images
            images={this.state.thumbnails}
            onImageClick={this.props.onImageClick}
            currentImage={this.props.currentImage}
          />
          <i className="fas fa-chevron-down" id="downArrow" />
        </div>
      </>
    );
  }
}
