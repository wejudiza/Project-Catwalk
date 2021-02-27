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
        {this.props.arrOfReviews.map((review) => {
          return (
            <div key={review.review_id}>

              [change this to show stars later] {review.rating} {review.reviewer_name}, {review.date}
              <h3>
                {review.summary}
              </h3>
              <p>
                {review.body}
              </p>
              <div>
                Helpful?
                <span> </span>
                <span>Yes({review.helpfulness})</span>
                <span> </span>
                <span>|</span>
                <span>  </span>
                <span>Report</span>
              </div>
            </div>
          )
        })}
      </div>
    )
  }
}

export default Review;
