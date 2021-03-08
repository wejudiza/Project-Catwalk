import React from 'react';
import axios from 'axios';
import ProductInfo from './ProductInfo';
import StyleSelector from './StyleSelector';
import ImageGallery from './ImageGallery';
import Description from './Description';

export default class Overview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: [],
      styles: [],
      currentStyle: {},
    };
    this.getProduct = this.getProduct.bind(this);
    // this.getStyles = this.getStyles.bind(this);
    this.onStyleClick = this.onStyleClick.bind(this);
  }

  componentDidMount() {
    this.getProduct();
  }

  componentDidUpdate(prevProps) {
    if (this.props.currentProduct !== prevProps.currentProduct) {
      this.getProduct();
    }
  }

  onStyleClick(e) {
    const styleIndex = this.state.styles.findIndex((i) => i.style_id === Number(e.target.title));
    this.setState({
      currentStyle: this.state.styles[styleIndex],
    });
  }

  getProduct() {
    axios.get(`/api/products/${this.props.currentProduct}`)
      .then((productResults) => {
        this.setState({
          product: productResults.data,
        });
        this.props.getCurrentProductInfo(productResults.data);
      })
      .then(() => {
        axios.get(`/api/products/${this.props.currentProduct}/styles`)
          .then((stylesResults) => {
            this.setState({
              styles: stylesResults.data.results,
              currentStyle: stylesResults.data.results[0],
            });
          });
      })
      .catch((err) => console.log('getProduct err: ', err));
  }

  render() {
    if (this.state.product.length !== 0 && this.state.styles.length !== 0) {
      return (
        <div id="overviewContainer">
          <br />
          <ProductInfo
            rating={this.props.rating}
            product={this.state.product}
            totalReviews={this.props.totalReviews}
          />
          <StyleSelector
            styles={this.state.styles}
            currentProduct={this.state.product.id}
            currentStyle={this.state.currentStyle}
            productName={this.state.product.name}
            onStyleClick={this.onStyleClick}
          />
          <ImageGallery
            styles={this.state.styles}
            images={this.state.currentStyle.photos}
          />
          <Description
            product={this.state.product}
            features={this.state.product.features}
          />
          {/* <button type="button">Share on Facebook</button>
          <button type="button">Share on Twitter</button>
          <button type="button">Share on Pinterest</button> */}
        </div>
      );
    }
    return (
      <div>
        Loading Product...
      </div>
    )
  }
}
