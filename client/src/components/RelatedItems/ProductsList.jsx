import React from 'react';
import axios from 'axios';
import Product from './Product.jsx';
import Arrow from './Arrow.jsx';
import Carousel from "react-elastic-carousel";




export default class ProductsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // currentProduct: this.props.currentProduct,
      productsListId: [],
      currentProductIndex: 0
    };
    this.getProductsListId = this.getProductsListId.bind(this);
    this.nextSlide = this.nextSlide.bind(this);
    this.previousSlide = this.previousSlide.bind(this);
    this.breakPoints = [
      { width: 1, itemsToShow: 1 },
      { width: 550, itemsToShow: 2},
      { width: 850, itemsToShow: 3 },
      { width: 1150, itemsToShow: 4 },
      { width: 1450, itemsToShow: 5 },
      { width: 1750, itemsToShow: 6 },
    ];

  }

  componentDidMount() {
    this.getProductsListId();
  }

  componentDidUpdate(prevProps) {
    if(this.props.currentProduct !== prevProps.currentProduct) {
      this.getProductsListId();
    }
  }

  // axios get request to /products/16056/related
  getProductsListId() {
    axios.get(`api/products/${this.props.currentProduct}/related`)
      .then((results) => {
        this.setState({
          productsListId: results.data,
        });
      })
      .catch((err) => console.log('getProductsListId err: ', err));
  }

  previousSlide () {
    const lastIndex = this.state.productsListId.length - 1;
    // console.log('lastIndex', lastIndex);
    const shouldResetIndex = this.state.currentProductIndex === 0;
    console.log('shouldResetIndex', shouldResetIndex);
    const index =  shouldResetIndex ? lastIndex : this.state.currentProductIndex - 1;
    // console.log('index', index);

    this.setState({
      currentProductIndex: index
    }, () => {
      console.log('this.state.currentProductIndex', this.state.currentProductIndex)
    });
  }

  nextSlide () {
    const lastIndex = this.state.productsListId.length - 1;
    // console.log('lastIndex', lastIndex);
    const shouldResetIndex = this.state.currentProductIndex === lastIndex;
    console.log('shouldResetIndex', shouldResetIndex);
    const index =  shouldResetIndex ? 0 : this.state.currentProductIndex + 1;
    // console.log('index', index);

    this.setState({
      currentProductIndex: index
    }, () => {
      console.log('this.state.currentProductIndex', this.state.currentProductIndex)
    });
  }



  // Map over a get request of the related items
  render() {
    return (
      <div className="testGrid">
        <h4 className="title">
          Related Products
        </h4>
        <div className='list productsCarousel'>
          <Carousel breakPoints={this.breakPoints}>
          {/* <Arrow className='fas fa-caret-left slide-arrow left-arrow' clickFunc={this.previousSlide}/> */}
          {/* e.g if currentProductIndex is greater than 4, then map through productsListId from index 1 - 5 */}
            {this.state.productsListId.map((productId, key) => (
              <div className="card" key={key}>
                <Product productId={productId} currentProduct={this.props.currentProduct} getCurrentProductId={this.props.getCurrentProductId}/>
              </div>
            ))}
          {/* <Arrow className='fas fa-caret-right slide-arrow right-arrow' clickFunc={this.nextSlide} lastIndex={this.state.productsListId.length - 1} currentProductIndex={this.state.currentProductIndex}/> */}
          </Carousel>
        </div>
      </div>
    );
  }
}
