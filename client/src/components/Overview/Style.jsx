import React from 'react';

const Style = (props) => {
  const currentStyleMode = () => {
    if (props.currentStyle.style_id === props.style.style_id) {
      return (
        <>
          <img
            src={props.style.photos[0].thumbnail_url}
            alt=""
            title={props.style.style_id}
            className="style-option selected-style-option"
            onClick={props.onStyleClick}
          />
          <i className="far fa-check-circle" />
        </>
      );
    } else {
      return (
        <img
          src={props.style.photos[0].thumbnail_url}
          alt=""
          title={props.style.style_id}
          className="style-option"
          onClick={props.onStyleClick}
        />
      )
    }
  };

  return (
    <div>
      <div key={props.index} id="style-container">
        {currentStyleMode()}
      </div>
    </div>
  );
};

export default Style;
