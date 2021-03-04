import React from 'react';
import axios from 'axios';
import Product from './Product.jsx';
import Arrow from './Arrow.jsx';

export default class ProductsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // currentProduct: this.props.currentProduct,
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
    axios.get(`api/products/${this.props.currentProduct}/related`)
      .then((results) => {
        this.setState({
          productsListId: results.data,
        });
      })
      .catch((err) => console.log('getProductsListId err: ', err));
  }


  // Map over a get request of the related items
  render() {
    return (
      <div>
        <h4>
          Related Products
        </h4>
        <div className='list'>
          <button className='fas fa-caret-left slide-arrow' >
            <Arrow className='slide-arrow' direction='left'/>
          </button>
          {this.state.productsListId.map((productId, key) => (
            <div className="card" key={key}>
              <Product productId={productId} currentProduct={this.props.currentProduct} getCurrentProductId={this.props.getCurrentProductId}/>
            </div>
          ))}
          <button className='fas fa-caret-right slide-arrow'>
            <Arrow className='slide-arrow' direction='right' />
          </button>
        </div>
      </div>
    );
  }
}
