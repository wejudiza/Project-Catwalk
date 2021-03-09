import React from 'react';
import axios from 'axios';
import Product from './Product.jsx';
import ProductsCarousel from './ProductsCarousel.jsx';
// import Arrow from './Arrow.jsx';

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


  render() {
    if (this.state.productsListId.length > 0) {
      return (
        <div className="testGrid">
          <h3 className=" widgetHeader title">
            RELATED PRODUCTS
          </h3>
          <ProductsCarousel productsListId={this.state.productsListId} currentProduct={this.props.currentProduct} getCurrentProductId={this.props.getCurrentProductId} productInfo={this.props.productInfo}/>
        </div>
      );
    }
    else {
      return (
        <div>
          Loading
        </div>
      )
    }
  }
}
