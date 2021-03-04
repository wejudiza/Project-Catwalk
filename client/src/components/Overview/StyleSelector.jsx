import React from 'react';
// import axios from 'axios';
// import ImageGallery from './ImageGallery';
import AddToCart from './AddToCart';
import Style from './Style';

export default class StyleSelector extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      styles: [],
      currentStyle: {},
    };
    // this.getStyles = this.getStyles.bind(this);
    // this.onStyleClick = this.onStyleClick.bind(this);
    this.salePriceMode = this.salePriceMode.bind(this);
  }

  // componentDidMount() {
  //   this.getStyles();
  // }

  // componentDidUpdate(prevProps) {
  //   if (this.props.currentProduct !== prevProps.currentProduct) {
  //     this.getStyles();
  //   }
  // }

  // onStyleClick(e) {
  //   const styleIndex = this.state.styles.findIndex((i) => i.style_id === Number(e.target.title));
  //   this.setState({
  //     currentStyle: this.state.styles[styleIndex],
  //   });
  // }

  // getStyles() {
  //   axios.get(`/api/products/${this.props.currentProduct}/styles`)
  //     .then((results) => {
  //       this.setState({
  //         styles: results.data.results,
  //         currentStyle: results.data.results[0],
  //       });
  //     })
  //     .catch((err) => console.log('getProduct err: ', err));
  // }

  salePriceMode() {
    if (this.props.currentStyle.sale_price) {
      return (
        <div>
          <span style={{ color: 'red' }}>{this.props.currentStyle.sale_price}</span>
          {'  '}
          <span><s>{this.props.currentStyle.original_price}</s></span>
        </div>
      )
    }
    return (
      <div>
        <span>{this.props.currentStyle.original_price}</span>
      </div>
    )
  }

  render() {
    if (this.props.styles.length !== 0) {
      return (
        <div className="styleSelector">
          {this.salePriceMode()}
          <br />
          <span><b>STYLE{' >'}</b></span>
          {' '}
            {this.props.currentStyle.name}
          <br />
          <div id="styles">
            {this.props.styles.map((style, index) => (
              <Style style={style} key={index} onStyleClick={this.props.onStyleClick} />
            ))}
          </div>
          {/* <ImageGallery images={this.props.currentStyle.photos} /> */}
          <AddToCart skus={this.props.currentStyle.skus} currentStyle={this.props.currentStyle} />
        </div>
      )
    }
    return (
      <div className="styleSelector">
        Loading Styles...
      </div>
    )
  }
}
