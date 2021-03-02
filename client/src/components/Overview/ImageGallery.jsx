import React from 'react';

export default class ImageGallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      image: [],
    };
  }

  render() {
    return (
      <div>
        <img src={this.props.currentStyle.photos[0].url} alt="" className="displayPhoto" />
      </div>
    )
  }
}