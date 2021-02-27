import React from 'react';
import axios from 'axios';

export default class Product extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  // Map over a get request of the related items
  render() {
    const {
      product
    } = this.props;
    return (
      <span>
        {product}
      </span>
    );
  }
}
