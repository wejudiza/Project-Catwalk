import React from 'react';
import ImgDisplay from './ImgDisplay';
import Modal from 'react-modal';
import axios from 'axios';

class Review extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalView: false,
      modalMessage: '',
    };
    this.handleClickHelpful = this.handleClickHelpful.bind(this);
    this.handleClickReport = this.handleClickReport.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  handleClickHelpful(e) {
    // console.log(typeof e.target.getAttribute('review_id'))
    axios.put(`/api/reviews/${Number(e.target.getAttribute('review_id'))}/helpful`)
      .then((rawData) => {
        // console.log(rawData.data);
        this.setState({
          modalView: !this.state.modalView,
          modalMessage: 'Thank you for your feedback!'
        });
      })
      .catch((err) => {
        console.log(err);
      })
  }

  handleClickReport(e) {
    axios.put(`/api/reviews/${Number(e.target.getAttribute('review_id'))}/report`)
      .then((rawData) => {
        // console.log(rawData.data);
        this.setState({
          modalView: !this.state.modalView,
          modalMessage: 'Thank you for your report! This review will be removed!'
        });
      })
      .catch((err) => {
        console.log(err);
      })
  }

  closeModal() {
    this.setState({
      modalView: !this.state.modalView
    }, () => {
      this.props.getReviews();
    });
  }

  render() {
    if (this.props.arrOfReviews.length === 0) {
      return (
        <div>
          <Modal isOpen={this.state.modalView} ariaHideApp={false} onRequestClose={this.closeModal}>
            {this.state.modalMessage}
            <button type="button" onClick={this.closeModal}>Back</button>
          </Modal>
        </div>
      )
    }
    return (
      <div>
        <Modal isOpen={this.state.modalView} ariaHideApp={false} onRequestClose={this.closeModal}>
          {this.state.modalMessage}
          <button type="button" onClick={this.closeModal}>Back</button>
        </Modal>
        {this.props.arrOfReviews.map((review) => {
          if (review.response === '' || !review.response) {
            return (
              <div key={review.review_id}>

                [change this to show stars later] {review.rating} {review.reviewer_name}, {review.date}
                <h3>
                  {review.summary}
                </h3>
                <p>
                  {review.body}
                </p>
                {/* <p>
                  <img src={review.photos[0].url} />
                </p> */}
                <ImgDisplay arrOfPhotos={review.photos} />
                <div>
                  Helpful?
                  <span> </span>
                  <u review_id={review.review_id} onClick={this.handleClickHelpful}>Yes</u>
                  <span>({review.helpfulness})</span>
                  <span> </span>
                  <span>|</span>
                  <span>  </span>
                  <u review_id={review.review_id} onClick={this.handleClickReport}>Report</u>
                </div>
              </div>
            )
          } else {
            return (
              <div key={review.review_id}>

                [change this to show stars later] {review.rating} {review.reviewer_name}, {review.date}
                <h3>
                  {review.summary}
                </h3>
                <p>
                  {review.body}
                </p>
                {/* <p>
                  <img src={review.photos[0].url} />
                </p> */}
                <ImgDisplay arrOfPhotos={review.photos} />
                <div>
                  <p>Response:</p>
                  <p>{review.response}</p>
                </div>
                <div>
                  Helpful?
                  <span> </span>
                  <span>Yes({review.helpfulness})</span>
                  <span> </span>
                  <span>|</span>
                  <span>  </span>
                  <span>Report</span>
                </div>
              </div>
            )
          }
        })}
      </div>
    )
  }
}

export default Review;
