import React from 'react';
import axios from 'axios';
import ReviewsList from './ReviewsList';
import RatingBreakdown from './RatingBreakdown';
import ProductBreakdown from './ProductBreakdown';

class Reviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      averageRating: 0,
      percentageOfRecommend: 0,
      numForRating: {},
      charac_size: 0,
      charac_comfort: 0,
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
    this.setState({
      charac_size: obj.Fit.value,
      charac_comfort: obj.Comfort.value
    });
  }

  // componentDidMount() {

  // }

  render() {
    return (
      <div>
        <h3>RATINGS & REVIEWS</h3>
        <RatingBreakdown averageRating={this.state.averageRating} percentageOfRecommend={this.state.percentageOfRecommend} numForRating={this.state.numForRating}/>
        <ProductBreakdown charac_size={this.state.charac_size} charac_comfort={this.state.charac_comfort}/>
        <ReviewsList getAverageRatingFromReview={this.getAverageRatingFromReview} getPercentageFromReviewsList={this.getPercentageFromReviewsList} getNumForRating={this.getNumForRating} getCharacFromReviewsList={this.getCharacFromReviewsList}/>
      </div>
    );
  }
}

export default Reviews;
