import React from 'react';
import axios from 'axios';
import Product from './Product.jsx';

export default class ProductsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productsListId: []
    };
    this.getProductsListId = this.getProductsListId.bind(this);
  }

  componentDidMount() {
    this.getProductsListId();
  }

  // axios get request to /products/16056/related
  getProductsListId() {
    axios.get('api/products/16056/related')
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
          Products List
        </h4>
        <div>
          {this.state.productsListId.map((productId, key) => (
            <div key={key}>
              <Product productId={productId} />
            </div>
          ))}
        </div>
      </div>
    );
  }
}
