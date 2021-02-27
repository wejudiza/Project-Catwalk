import React from 'react';
import Review from './Review';

class ReviewsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div>
        <h3>248 reviews, sorted by []</h3>
        <div>
          <Review />
        </div>
      </div>
    );
  }
}

export default ReviewsList;
