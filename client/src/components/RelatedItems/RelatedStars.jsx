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
        starRatedColor="yellow"
        numberOfStars={5}
        starRatedColor="black"
        starDimension="15px"
        starSpacing="1px"
      />
    )
  }
}

export default RelatedStars