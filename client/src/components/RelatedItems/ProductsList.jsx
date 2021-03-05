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
      { width: 550, itemsToShow: 2 },
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
    // const lastIndex = imgUrls.length - 1;
    // const { currentImageIndex } = this.state;
    // const shouldResetIndex = currentImageIndex === 0;
    // const index =  shouldResetIndex ? lastIndex : currentImageIndex - 1;

    // this.setState({
    //   currentImageIndex: index
    // });
  }

  nextSlide () {
    // const lastIndex = imgUrls.length - 1;
    // const { currentImageIndex } = this.state;
    // const shouldResetIndex = currentImageIndex === lastIndex;
    // const index =  shouldResetIndex ? 0 : currentImageIndex + 1;

    // this.setState({
    //   currentImageIndex: index
    // });
  }



  // Map over a get request of the related items
  render() {
    return (
      <div>
        <h4>
          Related Products
        </h4>
        <div className='list'>
          <Carousel breakPoints={this.breakPoints}>
            {/* <Arrow className='fas fa-caret-left slide-arrow left-arrow'/> */}
            {/* e.g if currentProductIndex is greater than 4, then map through productsListId from index 1 - 5 */}
            {this.state.productsListId.map((productId, key) => (
              <div className="card" key={key}>
                <Product productId={productId} currentProduct={this.props.currentProduct} getCurrentProductId={this.props.getCurrentProductId}/>
              </div>
            ))}
            {/* <Arrow className='fas fa-caret-right slide-arrow right-arrow'/> */}
          </Carousel>
        </div>
      </div>
    );
  }
}
