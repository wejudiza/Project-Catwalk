import React from 'react';
import Modal from 'react-modal';
import Review from './Review';
import axios from 'axios';

class ReviewsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalView: false,
      arrOfReviews: [],
    };
    this.handleAddReview = this.handleAddReview.bind(this);
    this.getReviews = this.getReviews.bind(this);
    this.getCharac = this.getCharac.bind(this);
  }

  componentDidMount() {
    this.getReviews();
    this.getCharac();
  }

  getReviews() {
    axios.get('api/reviews', {
      params: {
        product_id: 16056,
        sort: 'relevant'
      }
    })
      .then((rawData) => {
        // console.log(rawData.data.results)
        let arrOfReviews = rawData.data.results
        let totalRating = 0;
        let totalRecommend = 0;
        let numForRating = {};
        arrOfReviews.forEach((review) => {
          totalRating += review.rating;
          if (review.recommend) {
            totalRecommend ++;
          };
          if (numForRating[review.rating] === undefined) {
            numForRating[review.rating] = 1;
          } else {
            numForRating[review.rating] ++;
          }
        });
        this.props.getAverageRatingFromReview(totalRating/arrOfReviews.length);
        this.props.getPercentageFromReviewsList((totalRecommend/arrOfReviews.length) * 100 + '%');
        this.props.getNumForRating(numForRating);
        this.setState({
          arrOfReviews: arrOfReviews
        });
      })
      .catch((err) => {
        console.log(err);
      })
  }

  getCharac() {
    axios.get('api/reviews/meta/16056')
      .then((rawData) => {
        let charac = rawData.data.characteristics;
        this.props.getCharacFromReviewsList(charac);
      })
      .catch((err) => {
        console.log(err);
      })
  }

  handleAddReview() {
    this.setState({
      modalView: !this.state.modalView
    });
  }

  render() {
    return (
      <div id="reviewList">
        <h3>{this.state.arrOfReviews.length} reviews, sorted by
          <select>
            <option>relevance</option>
            <option>newest</option>
            <option>helpful</option>
          </select>
        </h3>
        <div>
          <Review arrOfReviews={this.state.arrOfReviews} />
          <button type="button">MORE REVIEWS</button>
          <button type="button" onClick={this.handleAddReview}>ADD A REVIEW +</button>
          <Modal isOpen={this.state.modalView} ariaHideApp={false} onRequestClose={this.handleAddReview}>
            <h1>Thank your for giving your feedback</h1>
            <label>Rating</label><br />
              <select name="rating">
                <option>5</option>
                <option>4</option>
                <option>3</option>
                <option>2</option>
                <option>1</option>
              </select><br />
            <label>Summary</label><br />
              <input name="summary"></input><br />
            <label>Comments</label><br />
              <input name="body"></input><br />
            <label>Will you recommend this product?</label><br />
              <select name="recommend">
                <option>Yes</option>
                <option>No</option>
              </select><br />
            <label>Your Name</label><br />
              <input name="name"></input><br />
            <label>Your email</label><br />
              <input name="email"></input><br />
            <button type="button">Submit</button>
            <button type="button" onClick={this.handleAddReview}>Cancel</button>
          </Modal>
        </div>
      </div>
    );
  }
}

export default ReviewsList;
