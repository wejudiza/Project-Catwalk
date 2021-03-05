import React from 'react';

const Images = (props) => {
  const currentThumbnailMode = (image) => {
    if (props.currentImage.url === image.url) {
      return (
        <i className="fas fa-grip-lines" />
      );
    }
  };

  return (
    <div>
      <div className="thumbnailContainer">
        {props.images.map((image, index) => (
          <div>
            {/* <img
              src={image.thumbnail_url}
              title={image.url}
              onClick={props.onImageClick}
              key={index}
              className="thumbnails"
            /> */}
            {props.currentImage.url === image.url
              ? (
                <img
                  alt=""
                  src={image.thumbnail_url}
                  title={image.url}
                  onClick={props.onImageClick}
                  key={index}
                  className="selected-thumbnail"
                />
              )
              : (
                <img
                  alt=""
                  src={image.thumbnail_url}
                  title={image.url}
                  onClick={props.onImageClick}
                  key={index}
                  className="thumbnails"
                />
              )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Images;
