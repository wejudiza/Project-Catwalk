import React from 'react';
import axios from 'axios';
import ReviewsList from './ReviewsList';

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
        <ReviewsList />
      </div>
    );
  }
}

export default Reviews;
