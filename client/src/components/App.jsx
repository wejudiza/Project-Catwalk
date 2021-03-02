import React from 'react';
import Overview from './Overview/Overview';
import RelatedItems from './RelatedItems/RelatedItems';
import Reviews from './reviews/Reviews';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentProduct: 16056,
    };
    this.getCurrentProductId = this.getCurrentProductId.bind(this);
  }

  getCurrentProductId(product_id) {
    this.setState({
      currentProduct: product_id,
    });
  }

  render() {
    return (
      <div>
        <div id="products">
          <Overview currentProduct={this.state.currentProduct} />
        </div>
        <div id="relatedItems">
          <RelatedItems getCurrentProductId={this.getCurrentProductId} />
        </div>
        <div id="reviews">
          <Reviews currentProduct={this.state.currentProduct} />
        </div>
      </div>
    );
  }
}
export default App;
