import React from 'react';
import axios from 'axios';
import ImageGallery from './ImageGallery';
import AddToCart from './AddToCart';

export default class StyleSelector extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      styles: [],
    };
  }

  // getStyles() {
  //   axios.get('/api/products/16056/styles')
  //     .then((results) => {
  //       this.setState({
  //         styles: results.data,
  //       }, () => console.log('styles state: ', this.state.styles));
  //     })
  //     .catch((err) => console.log('getProduct err: ', err));
  // }

  render() {
    return (
      <div>
        StyleSelector
        <br />
        <div>
          {this.props.styles.map((style, index) => (
            <div key={index}>
              {style.name}
            </div>
          ))}
        </div>
        <ImageGallery />
        <AddToCart />
      </div>
    )
  }
}
