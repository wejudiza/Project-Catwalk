import React from 'react';
import ProductInfo from './ProductInfo.jsx';
import StyleSelector from './StyleSelector.jsx';
import ImageGallery from './ImageGallery.jsx';
import AddToCart from './AddToCart.jsx';

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

  render() {
    return (
      <div>
        This is where the Overview Widget will render
        <ProductInfo />
        <StyleSelector />
        <ImageGallery />
        <AddToCart />
      </div>
    );
  }
}
