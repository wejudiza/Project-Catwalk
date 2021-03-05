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
      <div className="container-rating">

        <div className="ratingSum container-ratingSum">

          <h1 className="num">
            {this.props.averageRating}
          </h1>

          <div className="stars">
            <StarRating rating={this.props.averageRating}/>
          </div>

        </div>

        <p className="recommendSum">{this.props.percentageOfRecommend} of reviews recommend this product</p>

        <div className="starPercent container-starPercent">
          <u className="five-star-context">5 stars</u>
          <div className="five-star-bar">
            <Status completed={this.props.numForRating['5']/this.props.numForRating['total']*100 || 0}/>
          </div>
          <u className="four-star-context">4 stars</u>
          <div className="four-star-bar">
            <Status completed={this.props.numForRating['4']/this.props.numForRating['total']*100 || 0}/>
          </div>
          <u className="three-star-context">3 stars</u>
          <div className="three-star-bar">
            <Status completed={this.props.numForRating['3']/this.props.numForRating['total']*100 || 0}/>
          </div>
          <u className="two-star-context">2 stars</u>
          <div className="two-star-bar">
            <Status completed={this.props.numForRating['2']/this.props.numForRating['total']*100 || 0}/>
          </div>
          <u className="one-star-context">1 stars</u>
          <div className="one-star-bar">
            <Status completed={this.props.numForRating['1']/this.props.numForRating['total']*100 || 0}/>
          </div>
        </div>

      </div>
    );
  }
}

export default RatingBreakdown;
