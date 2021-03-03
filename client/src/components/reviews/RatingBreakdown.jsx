import React from 'react';
import StarRating from './StarRating';
import Status from './StatusBar';

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
          <StarRating rating={this.props.averageRating}/>
        </h1>
        <p>{this.props.percentageOfRecommend} of reviews recommend this product</p>
        <p>
          <u>5 stars</u>
          <Status completed={this.props.numForRating['5']/5*100 || 0}/>
          <u>4 stars</u>
          <Status completed={this.props.numForRating['4']/5*100 || 0}/>
          <u>3 stars</u>
          <Status completed={this.props.numForRating['3']/5*100 || 0}/>
          <u>2 stars</u>
          <Status completed={this.props.numForRating['2']/5*100 || 0}/>
          <u>1 stars</u>
          <Status completed={this.props.numForRating['1']/5*100 || 0}/>
        </p>
      </div>
    );
  }
}

export default RatingBreakdown;
