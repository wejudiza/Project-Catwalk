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
    // this.onStyleClick = this.onStyleClick.bind(this);
  }

  componentDidMount() {
    this.getStyles();
  }

  getStyles() {
    axios.get(`/api/products/${this.props.currentProduct}/styles`)
      .then((results) => {
        // console.log('styles: ', results.data);
        this.setState({
          styles: results.data.results,
          currentStyle: results.data.results[0],
        });
      })
      .catch((err) => console.log('getProduct err: ', err));
  }

  render() {
    // const { currentStyle, styles } = this.state;
    if (this.state.styles.length !== 0) {
      // {console.log('currrentStyle:', this.state.currentStyle)}
      return (
        <div>
          <span>
            {this.state.currentStyle.original_price || this.state.currentStyle.original_price}
          </span>
          <br />
          STYLE
          {'>'}
          :selected style:
          <br />
          <div id="styles">
            {this.state.styles.map((style, index) => (
              <Style style={style} key={index} />
            ))}
          </div>
          <ImageGallery currentStyle={this.state.currentStyle} />
          <AddToCart skus={this.state.currentStyle.skus} />
        </div>
      )
    }
    return (
      <div>
        Loading Styles...
      </div>
    )
  }
}
