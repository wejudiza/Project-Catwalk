import React from 'react';
import axios from 'axios';

export default class Product extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // id: '',
      // name: '',
      // slogan: '',
      // description: '',
      // category: '',
      // default_price: '',
      // features: []
    };
  }

  // axios get request to /products/productId
  // getProductInfo() {
  //   axios.get(`/products/${productId}`)
  //     .then((results) => {
  //       this.setState({
  //         id: results.data.id,
  //         name: results.data.name,
  //         slogan: results.data.slogan,
  //         description: results.data.description,
  //         category: results.data.category,
  //         default_price: results.data.default_price,
  //         features: []
  //       });
  //     });
  // }

  render() {
    const {
      productId
    } = this.props;
    return (
      <span>
        {productId}
      </span>
    );
  }
}
