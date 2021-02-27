import React from 'react';
import axios from 'axios';
import Product from './Product.jsx';

export default class ProductsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  // Map over a get request of the related items
  render() {
    return (
      <div>
        Products List
        {['Product', 'Product', 'Product', 'Product'].map((product, key) => (
          <span key={key}>
            <Product product={product} />
          </span>
        ))}
      </div>
    );
  }
}
