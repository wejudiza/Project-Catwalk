import React from 'react';
import axios from 'axios';
import ReviewsList from './ReviewsList';
import RatingBreakdown from './RatingBreakdown';
import ProductBreakdown from './ProductBreakdown';

class Reviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      averageRating: 5,
      percentageOfRecommend: '100%',
      numForRating: {},
      charac_size: 5,
      charac_comfort: 5,
    };
    this.getAverageRatingFromReview = this.getAverageRatingFromReview.bind(this);
    this.getPercentageFromReviewsList = this.getPercentageFromReviewsList.bind(this);
    this.getNumForRating = this.getNumForRating.bind(this);
    this.getCharacFromReviewsList = this.getCharacFromReviewsList.bind(this);
  }

  getAverageRatingFromReview(averageRating) {
    this.setState({
      averageRating: averageRating
    });
  }

  getPercentageFromReviewsList(percentageOfRecommend) {
    this.setState({
      percentageOfRecommend: percentageOfRecommend
    });
  }

  getNumForRating(obj) {
    this.setState({
      numForRating: obj
    });
  }

  getCharacFromReviewsList(obj) {
    // console.log(obj)
    if (obj.Fit !== undefined & obj.Comfort !== undefined) {
      this.setState({
        charac_size: obj.Fit.value,
        charac_comfort: obj.Comfort.value
      });
    } else if (obj.Size !== undefined & obj.Comfort !== undefined) {
      this.setState({
        charac_size: obj.Size.value,
        charac_comfort: obj.Comfort.value
      });
    }
  }

  // componentDidMount() {

  // }

  render() {
    return (
      <div>
        <h3>RATINGS & REVIEWS</h3>
        <RatingBreakdown averageRating={this.state.averageRating} percentageOfRecommend={this.state.percentageOfRecommend} numForRating={this.state.numForRating}/>
        <ProductBreakdown charac_size={this.state.charac_size} charac_comfort={this.state.charac_comfort}/>
        <ReviewsList currentProduct={this.props.currentProduct} getAverageRatingFromReview={this.getAverageRatingFromReview} getPercentageFromReviewsList={this.getPercentageFromReviewsList} getNumForRating={this.getNumForRating} getCharacFromReviewsList={this.getCharacFromReviewsList} getRating={this.props.getRating}/>
      </div>
    );
  }
}

export default Reviews;
