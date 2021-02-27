import React from 'react';
import axios from 'axios';

export default class Product extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // id: '',
      // name: '',
      // slogan: '',
      // description: '',
      // category: '',
      // default_price: '',
      // features: []
    };
    this.getProductInfo = this.getProductInfo.bind(this);
  }

  componentDidMount() {
    this.getProductInfo(this.props.productId);
  }

  // axios get request to /products/productId
  getProductInfo(productId) {
    axios.get(`api/products/${productId}`)
      .then((results) => {
        this.setState({
          id: results.data.id,
          name: results.data.name,
          slogan: results.data.slogan,
          description: results.data.description,
          category: results.data.category,
          default_price: results.data.default_price,
          features: results.data.features
        }, ()=> {
          console.log('state', this.state)
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    // ** Potentially deconstruct props?
    // const {
    //   productId
    // } = this.props;
    return (
      <span>
        <div>
          {this.state.category}
        </div>
        <div>
          {this.state.name}
        </div>
        <div>
          {this.state.default_price}
        </div>
        <div>
          Placeholder for Reviews
        </div>
      </span>
    );
  }
}
