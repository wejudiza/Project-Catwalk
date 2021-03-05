import React from 'react';
import Overview from './Overview/Overview';
import RelatedItems from './RelatedItems/RelatedItems';
import Reviews from './reviews/Reviews';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentProduct: 16056,
      ratingForCurrentProduct: 0,
      totalReviewsForCurrentProduct: 0,
    };
    this.getCurrentProductId = this.getCurrentProductId.bind(this);
    this.getRating = this.getRating.bind(this);
    this.getTotalReviews = this.getTotalReviews.bind(this);
  }

  // function to get current product_id from relatedItem and save it to state
  getCurrentProductId(product_id) {
    this.setState({
      currentProduct: product_id,
    });
  }

  // function to get current displaying product's rating from reviews
  getRating(rating) {
    this.setState({
      ratingForCurrentProduct: rating,
    });
  }

  // function to get current displaying product's rating from reviews
  getTotalReviews(total) {
    this.setState({
      totalReviewsForCurrentProduct: total,
    });
  }

  render() {
    return (
      <div>
        <div id="products">
          <Overview
            rating={this.state.ratingForCurrentProduct}
            currentProduct={this.state.currentProduct}
            totalReviews={this.state.totalReviewsForCurrentProduct}
          />
        </div>
        <div id="relatedItems">
          <RelatedItems
            currentProduct={this.state.currentProduct}
            getCurrentProductId={this.getCurrentProductId}
          />
        </div>
        <div id="reviews">
          <Reviews
            currentProduct={this.state.currentProduct}
            getRating={this.getRating}
            getTotalReviews={this.getTotalReviews}
          />
        </div>
      </div>
    );
  }
}

export default App;
