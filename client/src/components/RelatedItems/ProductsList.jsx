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
      displayProductsListId: [],
      currentProductIndex: 0,
      itemsToDisplay: 4,
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
          displayProductsListId: results.data.slice(this.state.currentProductIndex, this.state.currentProductIndex + this.state.itemsToDisplay)
        });
      })
      .then(() => {
        this.setState({
          displayProductsListId: this.state.productsListId.slice(this.state.currentProductIndex, this.state.currentProductIndex + this.state.itemsToDisplay)
        });
      })
      .catch((err) => console.log('getProductsListId err: ', err));
  }

  previousSlide () {
    // const lastIndex = this.state.productsListId.length - 1;
    // // console.log('lastIndex', lastIndex);
    // const shouldResetIndex = this.state.currentProductIndex === 0;
    // console.log('shouldResetIndex', shouldResetIndex);
    const currentIndex = this.state.currentProductIndex - 1;
    // console.log('index', index);

    this.setState({
      currentProductIndex: currentIndex,
      displayProductsListId: this.state.productsListId.slice(currentIndex, currentIndex + this.state.itemsToDisplay)
    }, () => {
      console.log('this.state', this.state)
    });
  }

  nextSlide () {
    // const lastIndex = this.state.productsListId.length - 1;
    // console.log('lastIndex', lastIndex);
    // const shouldResetIndex = this.state.currentProductIndex === lastIndex;
    // console.log('shouldResetIndex', shouldResetIndex);
    const currentIndex =  this.state.currentProductIndex + 1;
    // console.log('index', index);

    this.setState({
      currentProductIndex: currentIndex,
      displayProductsListId: this.state.productsListId.slice(currentIndex, currentIndex + this.state.itemsToDisplay)
    }, () => {
      console.log('this.state', this.state)
    });
  }



  // Map over a get request of the related items
  render() {
    return (
      <div className="testGrid">
        <h4 className="title">
          Related Products`
        </h4>
        <div className='list productsCarousel'>
          {/* <Carousel breakPoints={this.breakPoints}> */}
          <Arrow className='fas fa-caret-left slide-arrow left-arrow'
            clickFunc={this.previousSlide}
            productsListLength={this.state.productsListId.length}
            displayProductsListLength={this.state.displayProductsListId.length}
            currentProductId={this.state.productsListId[this.state.currentProductIndex]}
            firstDisplayProductId={this.state.displayProductsListId[0]}
          />
            {this.state.displayProductsListId.map((productId, key) => (
              <div className="card" key={key}>
                <Product productId={productId} currentProduct={this.props.currentProduct} getCurrentProductId={this.props.getCurrentProductId}/>
              </div>
            ))}
          <Arrow className='fas fa-caret-right slide-arrow right-arrow'
            clickFunc={this.nextSlide}
            // lastIndex={this.state.productsListId.length - 1}
            // currentProductIndex={this.state.currentProductIndex}
            productsListLength={this.state.productsListId.length}
            displayProductsListLength={this.state.displayProductsListId.length}
            lastProductId={this.state.productsListId[this.state.productsListId.length - 1]}
            lastDisplayProductId={this.state.displayProductsListId[this.state.displayProductsListId.length - 1]}
          />
          {/* </Carousel> */}
        </div>
      </div>
    );
  }
}
