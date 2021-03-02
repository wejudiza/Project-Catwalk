import React from 'react';
import StarRatings from 'react-star-ratings';

class StarRating extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <StarRatings
        rating={this.props.rating}
        starRatedColor="yellow"
        // changeRating={this.changeRating}
        numberOfStars={5}
        // name='rating'
        starDimension="15px"
        starSpacing="1px"
      />
    )
  }
}

export default StarRating;