import React from 'react';

class Review extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div>
        [stars go here]
        <h3>
          [title of review goes here]
        </h3>
        <p>
          [content of review goes here]
        </p>
        <div>
          Helpful?
          <em>Yes(number of yes)</em>
          <em>|</em>
          <em>Report</em>
        </div>
        <button type="button">MORE REVIEWS</button>
        <button type="button">ADD A REVIEW +</button>
      </div>
    );
  }
}

export default Review;
