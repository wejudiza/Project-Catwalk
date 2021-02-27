import React from 'react';
import axios from 'axios';

export default class Product extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      name: '',
      slogan: '',
      description: '',
      category: '',
      default_price: '',
      features: [],
      ratings: {}
    };
    this.getProductInfo = this.getProductInfo.bind(this);
    this.getStars = this.getStars.bind(this);
  }

  componentDidMount() {
    this.getProductInfo(this.props.productId);
    this.getStars(this.props.productId);
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
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  getStars(productId) {
    axios.get(`api/reviews/meta/${productId}`)
      .then((results) => {
        this.setState({
          ratings: results.ratings
        }, ()=> {
          console.log(this.state);
        })
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
        <em>
          Placeholder for Reviews
        </em>
      </span>
    );
  }
}
