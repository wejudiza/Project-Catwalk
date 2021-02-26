import React from 'react';
import axios from 'axios';
import ProductInfo from './ProductInfo';
import StyleSelector from './StyleSelector';

export default class Overview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: [],
    };
    this.getProduct = this.getProduct.bind(this);
  }

  componentDidMount() {
    this.getProduct();
  }

  getProduct() {
    axios.get('/api/products/16056')
      .then((results) => {
        this.setState({
          product: results.data,
        }, () => console.log('product state: ', this.state.product));
      })
      .catch((err) => console.log('getProduct err: ', err));
  }

  render() {
    return (
      <div>
        This is where the Overview Widget will render
        <ProductInfo product={this.state.product[0]} />
        <StyleSelector />
      </div>
    );
  }
}
