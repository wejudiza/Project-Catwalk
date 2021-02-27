import React from 'react';
import axios from 'axios';
import ImageGallery from './ImageGallery';
import AddToCart from './AddToCart';
import Style from './Style';

export default class StyleSelector extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      styles: [],
      currentStyle: {},
    };
    this.getStyles = this.getStyles.bind(this);
  }

  componentDidMount() {
    this.getStyles();
  }

  getStyles() {
    axios.get('/api/products/16056/styles')
      .then((results) => {
        this.setState({
          styles: results.data.results,
          currentStyle: results.data.results[0],
        });
      })
      .catch((err) => console.log('getProduct err: ', err));
  }

  render() {
    return (
      <div>
        StyleSelector
        <br />
        <span>
          {this.state.currentStyle.original_price || this.state.currentStyle.original_price}
        </span>
        <div>
          {console.log('styles props: ', this.state.styles)}
          {console.log('currentStyle state: ', this.state.currentStyle)}
          {this.state.styles.map((style, index) => (
            <Style style={style} key={index} />
          ))}
        </div>
        {/* {console.log('current style: ', this.state.currentStyle)} */}
        <ImageGallery currentStyle={this.state.currentStyle} />
        <AddToCart currentStyle={this.state.currentStyle} />
      </div>
    )
  }
}
