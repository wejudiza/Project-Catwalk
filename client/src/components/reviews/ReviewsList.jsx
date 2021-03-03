import React from 'react';
import Modal from 'react-modal';
import Review from './Review';
import axios from 'axios';

class ReviewsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sortMethod: 'relevant',
      modalView: false,
      arrOfReviews: [],
      product_id: this.props.currentProduct,
      rating: 5,
      summary: '',
      body: '',
      recommend: true,
      name: '',
      email: '',
      size: 5,
      comfortable: 5,
    };
    this.getReviews = this.getReviews.bind(this);
    this.getCharac = this.getCharac.bind(this);
    this.handleSort = this.handleSort.bind(this);
    this.handleAddReview = this.handleAddReview.bind(this);
    this.handleFormInput = this.handleFormInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    // console.log(this.props.currentProduct)
    this.getReviews();
    this.getCharac();
  }

  componentDidUpdate(prevProps) {
    if(this.props.currentProduct !== prevProps.currentProduct) {
      this.getReviews();
      this.getCharac();
    }
  }

  getReviews() {
    axios.get('api/reviews', {
      params: {
        product_id: this.props.currentProduct,
        sort: this.state.sortMethod
      }
    })
      .then((rawData) => {
        // console.log(rawData.data.results)
        let arrOfReviews = rawData.data.results
        let totalRating = 0;
        let totalRecommend = 0;
        let numForRating = {};
        let totalNumForRating = 0;
        if (arrOfReviews.length !== 0) {
          arrOfReviews.forEach((review) => {
            totalRating += review.rating;
            if (review.recommend) {
              totalRecommend ++;
            };
            if (numForRating[review.rating] === undefined) {
              numForRating[review.rating] = 1;
              totalNumForRating++;
            } else {
              numForRating[review.rating] ++;
              totalNumForRating++;
            }
          });
          // console.log(totalNumForRating)
          // console.log(totalRecommend/arrOfReviews.length)
          numForRating['total'] = totalNumForRating;
          // console.log(numForRating)
          this.props.getAverageRatingFromReview(totalRating/arrOfReviews.length);
          this.props.getRating(totalRating/arrOfReviews.length);
          this.props.getPercentageFromReviewsList(Math.floor((totalRecommend/arrOfReviews.length) * 100) + '%');
          this.props.getNumForRating(numForRating);

        } else {
          this.props.getAverageRatingFromReview(0);
          this.props.getRating(0);
          this.props.getPercentageFromReviewsList(0);
          this.props.getNumForRating(numForRating);
        }
        this.setState({
          arrOfReviews: arrOfReviews
        });
      })
      .catch((err) => {
        console.log(err);
      })
  }

  getCharac() {
    axios.get(`api/reviews/meta/${this.props.currentProduct}`)
      .then((rawData) => {
        let charac = rawData.data.characteristics;
        // console.log(charac)
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

  handleSort(e) {
    this.setState({
      sortMethod: e.target.value
    }, ()=> {
      this.getReviews();
    });
  }

  handleFormInput(e) {
    e.preventDefault();
    if (e.target.name === 'rating' || e.target.name === 'size' || e.target.name === 'comfortable') {
      this.setState({
        [e.target.name]: Number(e.target.value)
      });
    } else if (e.target.name === 'recommend') {
      if (e.target.value === 'Yes') {
        this.setState({
          [e.target.name]: true
        });
      } else {
        this.setState({
          [e.target.name]: false
        });
      }
    } else {
      this.setState({
        [e.target.name]: e.target.value
      });
    }
  }

  handleSubmit() {
    // console.log('reqbody', {
    //   product_id: this.state.product_id,
    //   rating: this.state.rating,
    //   summary: this.state.summary,
    //   body: this.state.body,
    //   recommend: this.state.recommend,
    //   name: this.state.name,
    //   email: this.state.email,
    //   photos: [],
    //   characteristics: {}
    // })
    axios.post('/api/reviews', {
      product_id: this.props.currentProduct,
      rating: this.state.rating,
      summary: this.state.summary,
      body: this.state.body,
      recommend: this.state.recommend,
      name: this.state.name,
      email: this.state.email,
      photos: [],
      characteristics: {}
    })
      .then((rawData) => {
        // console.log(rawData.data);
        this.setState({
          sortMethod: 'newest',
          modalView: false,
          arrOfReviews: [],
          product_id: this.props.currentProduct,
          rating: 5,
          summary: '',
          body: '',
          recommend: true,
          name: '',
          email: '',
          size: 5,
          comfortable: 5,
        }, () => {
          this.getReviews();
        });
      })
      .catch((err) => {
        console.log(rawData.data);
      })
  }

  render() {
    return (
      <div id="reviewList">
        <h3>{this.state.arrOfReviews.length} reviews, sorted by
          <select onChange={this.handleSort}>
            <option>relevance</option>
            <option>newest</option>
            <option>helpful</option>
          </select>
        </h3>
        <div>
          <Review arrOfReviews={this.state.arrOfReviews} getReviews={this.getReviews}/>
          <button type="button">MORE REVIEWS</button>
          <button type="button" onClick={this.handleAddReview}>ADD A REVIEW +</button>
          <Modal isOpen={this.state.modalView} ariaHideApp={false} onRequestClose={this.handleAddReview}>
            <h1>Thank your for giving your feedback</h1>
            <form onChange={this.handleFormInput}>
              <label>Rating</label><br />
                <select name="rating">
                  <option>5</option>
                  <option>4</option>
                  <option>3</option>
                  <option>2</option>
                  <option>1</option>
                </select><br />
              <label>Level of Fit</label><br />
                <select name="size">
                  <option>5</option>
                  <option>4</option>
                  <option>3</option>
                  <option>2</option>
                  <option>1</option>
                </select><br />
              <label>Level of Comfortable</label><br />
                <select name="comfortable">
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
              <button type="button" onClick={this.handleSubmit}>Submit</button>
              <button type="button" onClick={this.handleAddReview}>Cancel</button>
            </form>
          </Modal>
        </div>
      </div>
    );
  }
}

export default ReviewsList;
