import React from 'react';
import axios from 'axios';
import Modal from 'react-modal';
import { Checkmark } from 'react-checkmark';
import ReactStars from 'react-stars'

export default class Product extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalView: false,
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
    this.handleModal = this.handleModal.bind(this);
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
      }/*)
      .catch((err) => {
        console.log(err);
      }*/);
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
        // console.log('style results', results.data);
        this.setState({
          thumbnail_url: results.data.results[0].photos[0].thumbnail_url,
          original_price: results.data.results[0].original_price,
          sale_price: results.data.results[0].sale_price
        }/*, () => {
          console.log('state', this.state);
        }*/)
      })
  }

  handleModal() {
    this.setState({
      modalView: !this.state.modalView
    }/*, () => {
      console.log(this.state.modalView)
    }*/)
  }

  render() {
    // ** Potentially deconstruct props?
    // const {
    //   productId
    // } = this.props;
    return (
      <div>
        {/* ** Add conditional rendering if img isn't available */}
        <button type="button" onClick={this.handleModal}> Modal </button>
        <Modal isOpen={this.state.modalView} ariaHideApp={false} onRequestClose={this.handleModal}>
          <h3>
            COMPARING
          </h3>
          <h4>
            {this.state.name}
          </h4>
          <div>
            {this.state.features.map((feature, key) => {
              return (
                <div key={key}>
                  <span>
                    <Checkmark size='small'/>
                    {feature.value}
                  </span>
                    {feature.feature}
                  <span>
                  </span>
                </div>
              )
            })}
          <h4>
            PLACEHOLDER FOR OVERVIEW PRODUCT
          </h4>
          </div>
          <div>
            <button onClick={this.handleModal}>Back</button>
          </div>
        </Modal>
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
        <div>
          <ReactStars edit={false}/>
        </div>
      </div>
    );
  }
}
