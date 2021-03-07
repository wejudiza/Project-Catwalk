import React from 'react';
import ReactModal from 'react-modal';

const modalStyle = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

const Zoom = (props) => (
  <ReactModal
    isOpen
    style={modalStyle}
    ariaHideApp={false}
    preventScroll={true}
    onRequestClose={props.handleModal}
  >
    <img
    src={props.currentImageUrl}
    alt=""
    className="zoomedDisplayPhoto"
    />
    {props.currentImage.url === props.thumbnails[0].url
    ? null
    : <i className="fas fa-arrow-left fa-2x" id="expanded-left-arrow" onClick={() => props.onLeftArrowClick(props.currentImageIndex)} />}
    {props.currentImage.url === props.thumbnails[props.thumbnails.length - 1].url
    ? null
    : <i className="fas fa-arrow-right fa-2x" id="expanded-right-arrow" onClick={() => props.onRightArrowClick(props.currentImageIndex)} />}

    <div className="dots-overlay">
      {props.thumbnails.map((thumbnail, index) => (
        props.currentImageUrl === thumbnail.url
          ? (
            <i
              key={index}
              className="fas fa-circle selected-dot"
              title={thumbnail.url}
              onClick={props.onImageClick}
            />
          )
          : (
            <i
              key={index}
              className="fas fa-circle"
              title={thumbnail.url}
              onClick={props.onImageClick}
            />
          )
      ))}
    </div>
  </ReactModal>
);

export default Zoom;