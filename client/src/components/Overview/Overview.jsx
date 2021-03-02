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
    this.getProduct()
  }

  componentDidUpdate(prevProps) {
    if(this.props.currentProduct !== prevProps.currentProduct) {
      this.getProduct()
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.currentProduct !== prevProps.currentProduct) {
      this.getProduct();
    }
  }

  getProduct() {
    axios.get(`/api/products/${this.props.currentProduct}`)
      .then((results) => {
        this.setState({
          product: results.data,
        }, () => console.log('state product: ', this.state));
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
<<<<<<< HEAD
          <StyleSelector currentProduct={this.state.product.id}/>
=======
          <StyleSelector currentProduct={this.state.product.id} />
>>>>>>> 87cadf8 (Implementing select dropdown to track default option)
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
