import React from 'react';
import ImgDisplay from './ImgDisplay';
import StarRating from './StarRating';
import Modal from 'react-modal';
import axios from 'axios';

// inline style for modal popups after clicking yes or report
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  },
};

// translate timestamp
const monthTranslate = {
  '01': 'January',
  '02': 'February',
  '03': 'March',
  '04': 'April',
  '05': 'May',
  '06': 'June',
  '07': 'July',
  '08': 'August',
  '09': 'September',
  10: 'October',
  11: 'November',
  12: 'December',
};

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

  // function handling click on yes
  handleClickHelpful(e) {
    // console.log(typeof e.target.getAttribute('review_id'))
    axios.put(`/api/reviews/${Number(e.target.getAttribute('review_id'))}/helpful`)
      .then(() => {
        // console.log(rawData.data);
        this.setState({
          modalView: !this.state.modalView,
          modalMessage: 'Thank you for your feedback!',
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  // function handling click on report
  handleClickReport(e) {
    axios.put(`/api/reviews/${Number(e.target.getAttribute('review_id'))}/report`)
      .then(() => {
        // console.log(rawData.data);
        this.setState({
          modalView: !this.state.modalView,
          modalMessage: 'Thank you for your report! This review will be removed!',
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  // function to close modal for helpful and report feedback
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
          <Modal
            isOpen={this.state.modalView}
            ariaHideApp={false}
            onRequestClose={this.closeModal}
            style={customStyles}
          >{this.state.modalMessage}<br />

            <button
              type="button"
              onClick={this.closeModal}
            >Back</button>

          </Modal>
        </div>
      )
    }
    return (
      <div>
        <Modal isOpen={this.state.modalView} ariaHideApp={false} onRequestClose={this.closeModal} style={customStyles}>
          {this.state.modalMessage}<br />
          <button type="button" onClick={this.closeModal}>Back</button>
        </Modal>
        {this.props.arrOfReviews.map((review) => {
          return (
            <div className="container-review" key={review.review_id}>
              <div className="review-stars">
                <StarRating rating={review.rating} />
              </div>
              <div className="timeStamp">
                &#10004;{`${review.reviewer_name}, ${monthTranslate[review.date.slice(5, 7)]} ${review.date.slice(8, 10)}, ${review.date.slice(0, 4)}`}
              </div>
              <h4 className="summary">
                {review.summary}
              </h4>
              <p className="body">
                {review.body}
              </p>
              <div className="reviewImg">
                <ImgDisplay arrOfPhotos={review.photos} />
              </div>
              {(review.response === '' || !review.response) ?
                null :
                (
                  <div className="response">
                    <p>Response:</p>
                    <p>{review.response}</p>
                  </div>
                )
              }
              {(review.recommend) ?
                <div
                  className="recommend"
                >
                  <span>&#128293;</span><span> </span>
                  I recommend this product
                </div>
                :
                null
              }
              <div className="footer">
                Helpful?
                <span> </span>
                <u review_id={review.review_id} onClick={this.handleClickHelpful}>Yes</u>
                <span>({review.helpfulness})</span>
                <span> </span>
                <span>|</span>
                <span>  </span>
                <u review_id={review.review_id} onClick={this.handleClickReport}>Report</u>
                <hr width='97%' align='left' color='rgb(66, 63, 63)' />
              </div>
            </div>
          )

          // DRY VIOLATION!!!!!

          // if (review.response === '' || !review.response) {
          // }
          // else {
          //   return (
          //     <div key={review.review_id}>
          //       <StarRating rating={review.rating} />
          //       {review.reviewer_name}, &nbsp;&nbsp;&nbsp;
          //       {`${monthTranslate[review.date.slice(5, 7)]} ${review.date.slice(8, 10)}, ${review.date.slice(0, 4)}`}
          //       <h3>
          //         {review.summary}
          //       </h3>
          //       <p>
          //         {review.body}
          //       </p>
          //       <ImgDisplay arrOfPhotos={review.photos} />
          //       <div>
          //         <p>Response:</p>
          //         <p>{review.response}</p>
          //       </div>
          //       <div>
          //         Helpful?
          //         <span> </span>
          //         <u review_id={review.review_id} onClick={this.handleClickHelpful}>Yes</u>
          //         <span>({review.helpfulness})</span>
          //         <span> </span>
          //         <span>|</span>
          //         <span>  </span>
          //         <u review_id={review.review_id} onClick={this.handleClickReport}>Report</u>
          //       </div>
          //       <hr width='50%' align='left' color='black' />
          //       <br /><br />
          //     </div>
          //   )
          // }
        })}
      </div>
    )
  }
}

export default Review;
