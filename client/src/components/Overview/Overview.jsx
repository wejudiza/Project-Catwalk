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
    axios.get(`/api/products/${this.props.currentProduct}`)
      .then((results) => {
        this.setState({
          product: results.data,
        });
      })
      .catch((err) => console.log('getProduct err: ', err));
  }

  render() {
    if (this.state.product.length !== 0) {
      return (
        <div>
          <br />
          This is where the Overview Widget will render
          <ProductInfo product={this.state.product} />
          <StyleSelector currentProduct={this.props.currentProduct}/>
          <button type="button">Share on Facebook</button>
          <button type="button">Share on Twitter</button>
          <button type="button">Share on Pinterest</button>
        </div>
      );
    }
    return (
      <div>
        This should not be seen
      </div>
    )
  }
}
