import React from 'react';
import StarRating from '../reviews/StarRating';

export default class ProductInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productInfo: {},
    };
  }

  reviewMode() {
    if (this.props.totalReviews > 0) {
      return (
        <div>
          <StarRating rating={this.props.rating} />
          {' '}
          <a href="#reviews" style={{ color: '#06c' }}>
            Read all {this.props.totalReviews} review(s)
          </a>
        </div>
      );
    }
  }

  render() {
    return (
      <div id="productInfo">
        {this.reviewMode()}
        <br />
        <span>{this.props.product.category}</span>
        <br />
        <span style={{ fontSize: '45px' }}><b>{this.props.product.name}</b></span>
      </div>
    )
  }
}
