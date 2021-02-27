import React from 'react';
import axios from 'axios';

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
        PRODUCT INFO
        <br />
        put star review here
        <br />
        <span>{this.props.product.category}</span>
        <br />
        <span>{this.props.product.name}</span>
        <br />
        <span>{this.props.product.default_price}</span>
        <br />
        <span>{this.props.product.slogan}</span>
        <br />
        <p>{this.props.product.description}</p>
      </div>
    )
  }
}
