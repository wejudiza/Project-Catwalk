import React from 'react';
import axios from 'axios';
import Product from './Product.jsx';
import ProductsCarousel from './ProductsCarousel.jsx';
import Arrow from './Arrow.jsx';
import Carousel from "react-elastic-carousel";

export default class ProductsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // currentProduct: this.props.currentProduct,
      productsListId: [],
      // displayProductsListId: [],
      // currentProductIndex: 0,
      // itemsToDisplay: 4,
    };
    this.getProductsListId = this.getProductsListId.bind(this);
    // this.nextSlide = this.nextSlide.bind(this);
    // this.previousSlide = this.previousSlide.bind(this);
    this.breakPoints = [
      { width: 1, itemsToShow: 1 },
      { width: 550, itemsToShow: 2},
      { width: 850, itemsToShow: 3 },
      { width: 1150, itemsToShow: 4 },
      { width: 1450, itemsToShow: 5 },
      { width: 1750, itemsToShow: 6 },
    ];
  }

  componentDidMount() {
    this.getProductsListId();
  }

  componentDidUpdate(prevProps) {
    if(this.props.currentProduct !== prevProps.currentProduct) {
      this.getProductsListId();
    }
  }

  // axios get request to /products/16056/related
  getProductsListId() {
    axios.get(`api/products/${this.props.currentProduct}/related`)
      .then((results) => {
        this.setState({
          productsListId: results.data
        });
      })
      .then(() => {
        this.setState({
          displayProductsListId: this.state.productsListId.slice(this.state.currentProductIndex, this.state.currentProductIndex + this.state.itemsToDisplay)
        });
      })
      .catch((err) => console.log('getProductsListId err: ', err));
  }

  // previousSlide () {
  //   const currentIndex = this.state.currentProductIndex - 1;

  //   this.setState({
  //     currentProductIndex: currentIndex,
  //     displayProductsListId: this.state.productsListId.slice(currentIndex, currentIndex + this.state.itemsToDisplay)
  //   }, () => {
  //     console.log('this.state', this.state)
  //   });
  // }

  // nextSlide () {
  //   const currentIndex =  this.state.currentProductIndex + 1;

  //   this.setState({
  //     currentProductIndex: currentIndex,
  //     displayProductsListId: this.state.productsListId.slice(currentIndex, currentIndex + this.state.itemsToDisplay)
  //   }, () => {
  //     console.log('this.state', this.state)
  //   });
  // }

  render() {
    if (this.state.productsListId.length > 0) {
      return (
        <div className="testGrid">
          <h4 className="title">
            Related Products`
          </h4>
          <ProductsCarousel productsListId={this.state.productsListId} currentProduct={this.props.currentProduct} getCurrentProductId={this.props.getCurrentProductId} productInfo={this.props.productInfo}/>
        </div>
      );
    } else {
      return (
        <div>
          Loading
        </div>
      )
    }
  }
}
