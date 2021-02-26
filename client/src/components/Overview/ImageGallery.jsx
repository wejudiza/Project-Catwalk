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
        This is where the ImageGallery goes
      </div>
    )
  }
}