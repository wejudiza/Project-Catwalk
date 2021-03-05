import React from 'react';

const Images = (props) => (
  <div>
    <div className="thumbnailContainer">
      {props.images.map((image, index) => (
        <div key={index}>
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

export default Images;
