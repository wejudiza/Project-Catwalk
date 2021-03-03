import React from 'react';
import ImgDisplay from './ImgDisplay';
import StarRating from './StarRating';
import Modal from 'react-modal';
import axios from 'axios';

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

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
  '10': 'October',
  '11': 'November',
  '12': 'December',
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
          <Modal isOpen={this.state.modalView} ariaHideApp={false} onRequestClose={this.closeModal} style={customStyles}>
            {this.state.modalMessage}<br />
            <button type="button" onClick={this.closeModal}>Back</button>
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
          // if (review.response === '' || !review.response) {
          return (
            <div key={review.review_id}>
              <StarRating rating={review.rating} />
              {review.reviewer_name}, &nbsp;&nbsp;&nbsp;
              {`${monthTranslate[review.date.slice(5, 7)]} ${review.date.slice(8, 10)}, ${review.date.slice(0, 4)}`}
              <h3>
                {review.summary}
              </h3>
              <p>
                {review.body}
              </p>
              <ImgDisplay arrOfPhotos={review.photos} />
              {(review.response === '' || !review.response) ?
                null :
                (
                  <div>
                    <p>Response:</p>
                    <p>{review.response}</p>
                  </div>
                )
              }
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
              <hr width='50%' align='left' color='black' />
              <br /><br />
            </div>
          )
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
