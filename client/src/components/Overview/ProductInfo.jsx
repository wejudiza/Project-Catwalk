import React from 'react';
import axios from 'axios';
import StarRating from '../reviews/StarRating';

export default class ProductInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productInfo: {},
    };
  }

  // reviewMode() {
  //   if ()
  // }

  render() {
    return (
      <div id="productInfo">
        <StarRating rating={this.props.rating} />
        {' '}
        <a href="#reviews" style={{ color: 'gray' }}>Read all reviews</a>
        <br />
        <br />
        <span>{this.props.product.category}</span>
        <br />
        <span style={{ fontSize: '45px' }}><b>{this.props.product.name}</b></span>
      </div>
    )
  }
}
