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
      ratings: {},
      thumbnail_url: '',
      original_price: '',
      sale_price: ''
    };
    this.getProductInfo = this.getProductInfo.bind(this);
    this.getStars = this.getStars.bind(this);
    this.getStyles = this.getStyles.bind(this);
  }

  componentDidMount() {
    this.getProductInfo(this.props.productId);
    this.getStars(this.props.productId);
    this.getStyles(this.props.productId);
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

  // ** GET STARS FROM DIRKS WIDGET
  getStars(productId) {
    axios.get(`api/reviews/meta/${productId}`)
      .then((results) => {
        this.setState({
          ratings: results.ratings
        })
      })
      .catch((err) => {
        console.log(err);
      });
  }

  getStyles(productId) {
    axios.get(`api/products/${productId}/styles`)
      .then((results) => {
        console.log('style results', results.data);
        this.setState({
          thumbnail_url: results.data.results[0].photos[0].thumbnail_url,
          original_price: results.data.results[0].original_price,
          sale_price: results.data.results[0].sale_price
        }, () => {
          console.log('state', this.state);
        })
      })
  }

  render() {
    // ** Potentially deconstruct props?
    // const {
    //   productId
    // } = this.props;
    return (
      <span>
        {/* ** Add conditional rendering if img isn't available */}
        <img src={this.state.thumbnail_url}/>
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
