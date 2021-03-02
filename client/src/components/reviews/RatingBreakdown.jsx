import React from 'react';
import StarRating from './StarRating';

class RatingBreakdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div id="ratingBreakdown">
        <h1>
          {this.props.averageRating}
          {/* <StarRating rating={this.props.averageRating}/> */}
        </h1>
        <p>{this.props.percentageOfRecommend} of reviews recommend this product</p>
        <div>
          <p>5 stars {this.props.numForRating['5'] || 0} [star bar goes here]</p>
          <p>4 stars {this.props.numForRating['4'] || 0} [star bar goes here]</p>
          <p>3 stars {this.props.numForRating['3'] || 0} [star bar goes here]</p>
          <p>2 stars {this.props.numForRating['2'] || 0} [star bar goes here]</p>
          <p>1 stars {this.props.numForRating['1'] || 0} [star bar goes here]</p>
        </div>
      </div>
    );
  }
}

export default RatingBreakdown;
