import React from 'react';

const Images = (props) => {
  const currentThumbnailMode = (image) => {
    if (props.currentImage.url === image.url) {
      return (
        <i class="fas fa-grip-lines" />
      );
    }
  };

  return (
    <div>
      <div className="thumbnailContainer">
        {props.images.map((image, index) => (
          <img
            src={image.thumbnail_url}
            title={image.url}
            onClick={props.onImageClick}
            key={index}
            className="thumbnails"
          />
        ))}
      </div>
    </div>
  )
}

export default Images;