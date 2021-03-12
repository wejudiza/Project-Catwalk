import React from 'react';
import StarRatings from 'react-star-ratings';

class RelatedStars extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <StarRatings
        rating={this.props.avgStars}
        starRatedColor="rgb(255,191,0)"
        starEmptyColor="darkgrey"
        numberOfStars={5}
        starDimension="15px"
        starSpacing="1px"
      />
    )
  }
}

export default RelatedStars