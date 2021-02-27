import React from 'react';
import axios from 'axios';
import ProductInfo from './ProductInfo';
import StyleSelector from './StyleSelector';

export default class Overview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: [],
      styles: [],
    };
    this.getProduct = this.getProduct.bind(this);
    this.getStyles = this.getStyles.bind(this);
  }

  componentDidMount() {
    this.getProduct();
    this.getStyles();
  }

  getProduct() {
    axios.get('/api/products/16056')
      .then((results) => {
        this.setState({
          product: results.data,
        });
      })
      .catch((err) => console.log('getProduct err: ', err));
  }

  getStyles() {
    axios.get('/api/products/16056/styles')
      .then((results) => {
        this.setState({
          styles: results.data.results,
        });
      })
      .catch((err) => console.log('getProduct err: ', err));
  }

  render() {
    return (
      <div>
        <br />
        This is where the Overview Widget will render
        <ProductInfo product={this.state.product} />
        <StyleSelector styles={this.state.styles}/>
        <button type="button">Share on Facebook</button>
        <button type="button">Share on Twitter</button>
        <button type="button">Share on Pinterest</button>
      </div>
    );
  }
}
