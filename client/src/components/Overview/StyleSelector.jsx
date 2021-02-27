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

  componentDidMount() {
    this.getStyles();
  }

  getStyles() {
    // axios.get('/api/products/16056/styles')
    //   .then((results) => {
    //     console.log('styles: ', results.data);
    //     this.setState({
    //       styles: results.data,
    //     }, () => console.log('styles state: ', this.state.styles));
    //   })
    //   .catch((err) => console.log('getProduct err: ', err));
  }

  render() {
    return (
      <div>
        This is where the StyleSelector goes
        <ImageGallery />
        <AddToCart />
      </div>
    )
  }
}
