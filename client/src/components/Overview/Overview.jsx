import React from 'react';
import axios from 'axios';
import ProductInfo from './ProductInfo';
import StyleSelector from './StyleSelector';
import ImageGallery from './ImageGallery';
import AddToCart from './AddToCart';

export default class Overview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: [],
    };
  }

  // componentDidMount() {
  //   this.getProduct();
  // }

  getProduct() {
    axios.get('/api/products/16056')
      .then((results) => {
        this.setState({
          product: results.data,
        });
      })
      .catch((err) => console.log('getProduct err: ', err));
  }

  render() {
    const { product } = this.state;
    return (
      <div>
        This is where the Overview Widget will render
        <ProductInfo product={product} />
        <StyleSelector />
        <ImageGallery />
        <AddToCart />
      </div>
    );
  }
}
