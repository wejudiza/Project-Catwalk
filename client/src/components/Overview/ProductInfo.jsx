import React from 'react';
import axios from 'axios';
import StarRating from '../reviews/StarRating';

export default class ProductInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productInfo: {},
    };
    // this.getProductInfo = this.getProductInfo.bind(this);
  }

  // componentDidMount() {
  //   this.getProductInfo();
  // }

  // getProductInfo() {
  //   axios.get('/api/products/16056')
  //     .then((results) => {
  //       console.log('get ProductInfo: ', results.data);
  //       this.setState({
  //         productInfo: results.data,
  //       });
  //     })
  //     .catch((err) => console.log('getProductInfo err: ', err));
  // }

  render() {
    return (
      <div>
        {/* {console.log('this.props.product: ', this.props.product)} */}
        <StarRating rating={this.props.rating} />
        <br />
        <span>{this.props.product.category}</span>
        <br />
        <span><b>{this.props.product.name}</b></span>
        <br />
        <span>{this.props.product.slogan}</span>
        <br />
        <p>{this.props.product.description}</p>
      </div>
    )
  }
}
