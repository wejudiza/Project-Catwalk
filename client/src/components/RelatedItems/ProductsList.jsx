import React from 'react';
import axios from 'axios';
import Product from './Product.jsx';

export default class ProductsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentProduct: this.props.currentProduct,
      productsListId: [],
    };
    this.getProductsListId = this.getProductsListId.bind(this);
  }

  componentDidMount() {
    this.getProductsListId();
  }

  // axios get request to /products/16056/related
  getProductsListId() {
    axios.get(`api/products/${this.state.currentProduct}/related`)
      .then((results) => {
        this.setState({
          productsListId: results.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }


  // Map over a get request of the related items
  render() {
    return (
      <div>
        <h4>
          Related Products
        </h4>
        <div id="productsList">
          {this.state.productsListId.map((productId, key) => (
            <div id="relatedProd" key={key}>
              <Product productId={productId} currentProduct={this.props.currentProduct} getCurrentProductId={this.props.getCurrentProductId}/>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
