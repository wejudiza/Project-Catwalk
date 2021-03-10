import React from 'react';
import axios from 'axios';
import Product from './Product.jsx';
import ProductsCarousel from './ProductsCarousel.jsx';
// import Arrow from './Arrow.jsx';

export default class ProductsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productsListId: [],
    };
    this.getProductsListId = this.getProductsListId.bind(this);
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
    let dataName = `${this.props.currentProduct}_related`
    if (!localStorage[dataName]) {
      axios.get(`api/products/${this.props.currentProduct}/related`)
        .then((results) => {
          localStorage.setItem(dataName, JSON.stringify(results.data))
          this.setState({
            productsListId: results.data
          });
        })
        .catch((err) => console.log('getProductsListId err: ', err));
    } else {
      this.setState({
        productsListId: JSON.parse(localStorage[dataName])
      });
    }
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
