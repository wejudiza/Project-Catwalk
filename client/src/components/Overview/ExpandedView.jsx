import React from 'react';
import ReactModal from 'react-modal';
import Zoom from './Zoom';

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

export default class ExpandedView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      zoomedView: false,
    };
    // this.handleKeyRight = this.handleKeyRight.bind(this);
    this.onExpandedClick = this.onExpandedClick.bind(this);
  }

  // handleKeyRight(e) {
  //   console.log('key code:', e.keyCode)
  //   if (e.keyCode === 38 && this.state.currentImageIndex > 0) {
  //     this.setState((prevState) => ({
  //       cursor: prevState.cursor - 1
  //     }))
  //   } else if (e.keyCode === 40 && cursor < result.length - 1) {
  //     this.setState((prevState) => ({
  //       cursor: prevState.cursor + 1
  //     }))
  //   }
  // }

  onExpandedClick() {
    this.setState({
      zoomedView: !this.state.zoomedView,
    });
  }

  render() {
    return (
      <ReactModal
        isOpen
        style={modalStyle}
        ariaHideApp={false}
        preventScroll
        onRequestClose={this.props.handleModal}
      >
        {!this.state.zoomedView
          ? (
            <div>
              <img
                src={this.props.currentImageUrl}
                alt=""
                className="expanded-display-photo"
                onClick={this.onExpandedClick}
              />
              {this.props.currentImage.url === this.props.thumbnails[0].url
                ? null
                : <i className="fas fa-chevron-left fa-3x" id="expanded-left-arrow" onClick={() => this.props.onLeftArrowClick(this.props.currentImageIndex)} />}
              {this.props.currentImage.url === this.props.thumbnails[this.props.thumbnails.length - 1].url
                ? null
                : <i className="fas fa-chevron-right fa-3x" id="expanded-right-arrow" onClick={() => this.props.onRightArrowClick(this.props.currentImageIndex)} />}
              <div id="dots-container">
                <div className="dots-overlay">
                  {this.props.thumbnails.map((thumbnail, index) => (
                    this.props.currentImageUrl === thumbnail.url
                      ? (
                        <i
                          key={index}
                          className="fas fa-circle selected-dot"
                          title={thumbnail.url}
                          onClick={this.props.onImageClick}
                        />
                      )
                      : (
                        <i
                          key={index}
                          className="fas fa-circle"
                          title={thumbnail.url}
                          onClick={this.props.onImageClick}
                        />
                      )
                  ))}
                </div>
              </div>
              <i className="fas fa-times fa-2x" onClick={this.props.handleModal} />
            </div>
          )
          : (
            <Zoom
              image={this.props.currentImageUrl}
              onExpandedClick={this.onExpandedClick}
            />
          )}
      </ReactModal>
    );
  }
}
