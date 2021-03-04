import React from 'react';

const Images = (props) => {
  return (
    <div className="thumbnailContainer">
      {props.images.map((image, index) => {
        return (
          <img
          src={image.thumbnail_url}
          title={image.url}
          onClick={props.onImageClick}
          key={index}
          className="thumbnails" />
        )
      })}
    </div>
  )
}

export default Images;