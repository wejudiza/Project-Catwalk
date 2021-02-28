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
    axios.get('/api/products/16056/styles')
      .then((results) => {
        console.log('styles: ', results.data);
        this.setState({
          styles: results.data,
        }, () => console.log('styles state: ', this.state.styles));
      })
      .catch((err) => console.log('getProduct err: ', err));
  }

  render() {
    const { currentStyle, styles } = this.state;
    if (this.state.styles.length !== 0) {
      return (
        <div>
          <span>
            {currentStyle.original_price || currentStyle.original_price}
          </span>
          <br />
          STYLE
          {'>'}
          :selected style:
          <br />
          <div>
            {/* {console.log('currentStyle state: ', currentStyle)} */}
            {styles.map((style, index) => (
              <Style style={style} key={index} />
            ))}
          </div>
          {/* {console.log('current style: ', currentStyle)} */}
          <ImageGallery currentStyle={currentStyle} />
          <AddToCart skus={currentStyle.skus} />
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
