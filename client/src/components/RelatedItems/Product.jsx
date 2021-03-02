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
      sale_price: '',
      // EVERYTHING BELOW IS THE CURRENT PRODUCT DISPLAY ON PRODUCT DETAIL
      currentProductId: this.props.currentProduct,
      currentProductName: '',
      currentProductFeatures: '',
    };
    this.getProductInfo = this.getProductInfo.bind(this);
    this.getStars = this.getStars.bind(this);
    this.getStyles = this.getStyles.bind(this);
    this.handleModal = this.handleModal.bind(this);
    this.getDisplayedProductInfo = this.getDisplayedProductInfo.bind(this);
  }

  componentDidMount() {
    this.getProductInfo(this.props.productId);
  }

  componentDidUpdate(prevProps) {
    if(this.props.productId !== prevProps.productId) {
      this.getProductInfo(this.props.productId);
    }
  }

  handleModal() {
    this.setState({
      modalView: !this.state.modalView,
    });
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
          features: results.data.features,
        });
      })
      .then(() => {
        this.getDisplayedProductInfo(this.state.currentProductId);
      })
      .then(() => {
        this.getStars(this.props.productId);
      })
      .then(() => {
        this.getStyles(this.props.productId);
      });
  }

  // ** GET STARS FROM DIRKS WIDGET
  getStars(productId) {
    axios.get(`api/reviews/meta/${productId}`)
      .then((results) => {
        this.setState({
          ratings: results.ratings
        });
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
          sale_price: results.data.results[0].sale_price,
        });
      });
  }

  getDisplayedProductInfo(currentProductId) {
    axios.get(`api/products/${currentProductId}`)
      .then((results) => {
        this.setState({
          currentProductName: results.data.name,
          currentProductFeatures: results.data.features,
        });
      });
  }

  render() {
    // ** Potentially deconstruct props?
    // const {
    //   productId
    // } = this.props;
    return (
      <div /*onClick={this.props.getCurrentId(productId)}*/>
        {/* ** Add conditional rendering if img isn't available */}
        <div id="modalContainer">
          <button className="far fa-star"type="button" id="modalBtn"onClick={this.handleModal}></button>
          <Modal isOpen={this.state.modalView} ariaHideApp={false} onRequestClose={this.handleModal} id='modal'>
            <h3>
              COMPARING
            </h3>
            <h4>
              {this.state.name}
            </h4>
              <div>
                {this.state.features.map((feature, key) => (
                  <div key={key}>
                    <span>
                      <Checkmark size='small'/>
                      {feature.value}
                      {feature.feature}
                    </span>
                  </div>
                ))}
              </div>
            <h4>
              {this.state.currentProductName}
            </h4>
              <div>
                {/* conditional render in order to wait for state to be set to currentProductFeatures */}
                {this.state.currentProductFeatures
                  ? this.state.currentProductFeatures.map((feature, key) => (
                    <div key={key}>
                      <span>
                        <Checkmark size='small'/>
                        {feature.value}
                        {feature.feature}
                      </span>
                    </div>
                  ))
                  : null}
              </div>
            <button onClick={this.handleModal}>Back</button>
          </Modal>
          {this.state.thumbnail_url ?
            <div onClick={() => this.props.getCurrentProductId(this.props.productId)}>
              <img id="relatedProdImg" src={this.state.thumbnail_url}/>
            </div>
            :
            <div onClick={() => this.props.getCurrentProductId(this.props.productId)}>
              <img src={'https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg'}/>
            </div>
          }
        </div>
        <div>
          {this.state.category}
        </div>
        <div>
          {this.state.name}
        </div>
        <div>
          ${this.state.default_price}
        </div>
        <div>
          <ReactStars edit={false}/>
        </div>
      </div>
    );
  }
}
