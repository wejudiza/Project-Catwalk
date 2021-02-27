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
          <span> </span>
          <span>Yes(number of yes)</span>
          <span> </span>
          <span>|</span>
          <span>  </span>
          <span>Report</span>
        </div>
      </div>
    );
  }
}

export default Review;
