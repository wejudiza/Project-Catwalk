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
      <div id="ratingBreakdown" class="container-rating">
        <h1 class="ratingSum">
          {this.props.averageRating}
          <StarRating rating={this.props.averageRating}/>
        </h1>
        <p class="recommendSum">{this.props.percentageOfRecommend} of reviews recommend this product</p>
        <div class="starPercent container-starPercent">
          <u class="five-star-context">5 stars</u>
          <div class="five-star-bar">
            <Status completed={this.props.numForRating['5']/this.props.numForRating['total']*100 || 0}/>
          </div>
          <u class="four-star-context">4 stars</u>
          <div class="four-star-bar">
            <Status completed={this.props.numForRating['4']/this.props.numForRating['total']*100 || 0}/>
          </div>
          <u class="three-star-context">3 stars</u>
          <div class="three-star-bar">
            <Status completed={this.props.numForRating['3']/this.props.numForRating['total']*100 || 0}/>
          </div>
          <u class="two-star-context">2 stars</u>
          <div class="two-star-bar">
            <Status completed={this.props.numForRating['2']/this.props.numForRating['total']*100 || 0}/>
          </div>
          <u class="one-star-context">1 stars</u>
          <div class="one-star-bar">
            <Status completed={this.props.numForRating['1']/this.props.numForRating['total']*100 || 0}/>
          </div>
        </div>
      </div>
    );
  }
}

export default RatingBreakdown;
