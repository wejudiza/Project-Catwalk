import React from 'react';
import axios from 'axios';
import Overview from './Overview/Overview';
import RelatedItems from './RelatedItems/RelatedItems';
import Reviews from './reviews/Reviews';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      currentProduct: 16056,
    };
    this.getCurrentProductId = this.getCurrentProductId.bind(this);
    this.getAllProducts = this.getAllProducts.bind(this);
  }

  componentDidMount() {
    this.getAllProducts();
  }

  getCurrentProductId(product_id) {
    this.setState({
      currentProduct: product_id,
    });
  }

  getAllProducts() {
    axios.get('/api/products')
      .then((results) => {
        this.setState({
          products: results.data,
          currentProduct: results.data[2].id,
        });
      })
      .catch((err) => console.log('getAllProducts error: ', err));
  }

  render() {
    return (
      <div>
        <div id="products">
          <Overview currentProduct={this.state.currentProduct} />
        </div>
        <div id="relatedItems">
          <RelatedItems currentProduct={this.state.currentProduct} />
        </div>
        <div>
          <Reviews currentProduct={this.state.currentProduct} />
        </div>
      </div>
    );
  }
}
export default App;