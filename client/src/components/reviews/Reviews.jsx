import React from 'react';
import axios from 'axios';
import ReviewsList from './ReviewsList';
import RatingBreakdown from './RatingBreakdown';
import ProductBreakdown from './ProductBreakdown';

class Reviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  componentDidMount() {

  }

  render() {
    return (
      <div>
        <h3>RATINGS & REVIEWS</h3>
        <RatingBreakdown />
        <ProductBreakdown />
        <ReviewsList />
      </div>
    );
  }
}

export default Reviews;
