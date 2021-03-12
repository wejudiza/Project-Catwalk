import React from 'react';
import Modal from 'react-modal';

class ImgDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentImgUrl: "",
      modalView: false,
    };
    this.showImg = this.showImg.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  // function handling thumbnail click
  showImg(e) {
    // console.log(e.target.getAttribute('src'))
    this.setState({
      currentImgUrl: e.target.getAttribute('src'),
    }, () => {
      this.closeModal();
    });
  }

  // function to close modal for helpful and report feedback
  closeModal() {
    this.setState({
      modalView: !this.state.modalView
    });
  }

  render() {
    // console.log(typeof this.props.arrOfPhotos[0].url)
    if (this.props.arrOfPhotos !== undefined & this.props.arrOfPhotos !== null) {
      return (
        <div>
          {this.props.arrOfPhotos.map((photoObj) => {
            if (photoObj.url[0] === 'h') {
              return (
                <span
                 key={photoObj.id}
                >
                  <Modal
                    isOpen={this.state.modalView}
                    ariaHideApp={false}
                    onRequestClose={this.closeModal}
                  >
                    <button
                      type="button"
                      className="button"
                      aria-label="Close"
                      onClick={this.closeModal}
                    >Back</button>
                    <h1>
                      &#128531;No idea why you wanna see this meaningless image, but here you go
                    </h1>
                    <img
                      src={this.state.currentImgUrl}
                    />
                  </Modal>
                  <img
                    onClick={this.showImg}
                    alt="review images"
                    key={photoObj.id}
                    src={photoObj.url}
                    className="thumbnail"
                  /><span> </span>
                </span>
              );
            } else {
              return null;
            }
          })}
        </div>
      );
    }
    return null;
  }
}

export default ImgDisplay;
