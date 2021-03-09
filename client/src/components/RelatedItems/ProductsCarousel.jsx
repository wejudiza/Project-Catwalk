import React from 'react';
import axios from 'axios';
import Carousel from "react-elastic-carousel";
import Product from './Product.jsx';

export default class ProductsCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    this.breakPoints = [
      { width: 1, itemsToShow: 1 },
      { width: 550, itemsToShow: 2},
      { width: 850, itemsToShow: 3 },
      { width: 1150, itemsToShow: 4 },
      { width: 1450, itemsToShow: 5 }
    ];
  }

  render() {
    return (
      <div className='list productsCarousel'>
        <Carousel
          breakPoints={this.breakPoints}
          disableArrowsOnEnd={true}
          itemsToShow={4}
        >
          {this.props.productsListId ?
            this.props.productsListId.map((productId, key) => (
              <div className="card" key={key}>
                <Product productId={productId} currentProduct={this.props.currentProduct} getCurrentProductId={this.props.getCurrentProductId} productInfo={this.props.productInfo}/>
              </div>
            ))
            :
            null
          }
        </Carousel>
      </div>
    )
  }


}