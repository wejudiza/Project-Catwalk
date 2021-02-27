import React from 'react';

class RatingBreakdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div id="ratingBreakdown">
        <h1>[3.5 and stars go here]</h1>
        <p>[100%] of reviews recommend this product</p>
        <div>
          <p>5 stars [star bar goes here]</p>
          <p>4 stars [star bar goes here]</p>
          <p>3 stars [star bar goes here]</p>
          <p>2 stars [star bar goes here]</p>
          <p>1 stars [star bar goes here]</p>
        </div>
      </div>
    );
  }
}

export default RatingBreakdown;