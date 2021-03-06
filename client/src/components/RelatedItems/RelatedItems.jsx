import React from 'react';
import axios from 'axios';
import ProductsList from './ProductsList';
import OutfitsList from './OutfitsList';

export default class RelatedItems extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      relatedIdArr: [],
      relatedInfoArr: [],
      relatedStylesArr: [],
      relatedReviewsArr: [],
    };
    this.getRelatedData = this.getRelatedData.bind(this);
  }

  componentDidMount() {
    this.getRelatedInfo(this.props.currentProduct)

  }

  // *** Do all axios requests here
  getRelatedInfo(productId) {
    axios.get(`api/products/${productId}/related`)
      .then((relatedIdResults) => {
        this.setState({
          relatedIdArr: relatedIdResults.data
        })
      })
      .then((relatedIdResults) => {
        var relatedInfoResults = this.state.relatedIdArr.map((relatedId) => (
          axios.get(`api/products/${relatedId}`)
            .then((result) => {
              return result.data
            })
        ));
        Promise.all(relatedInfoResults)
          .then((results) => {
            this.setState({
              relatedInfoArr: results
            }, () => {
              console.log(this.state)
            })
          })
      })
  }









  render() {
    return (
      <div>
        <h3>
          RELATED ITEMS & COMPARISON
        </h3>
        <div>
          <ProductsList currentProduct={this.props.currentProduct} getCurrentProductId={this.props.getCurrentProductId} productInfo={this.props.productInfo}/>
        </div>
        <div>
          <OutfitsList currentProduct={this.props.currentProduct}/>
        </div>
      </div>
    );
  }
}
