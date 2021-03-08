import React from 'react';
import AddToCart from './AddToCart';
import Style from './Style';

export default class StyleSelector extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      styles: [],
      currentStyle: {},
    };
    this.salePriceMode = this.salePriceMode.bind(this);
  }

  salePriceMode() {
    if (this.props.currentStyle.sale_price) {
      return (
        <div>
          <span style={{ color: 'red' }}>{`$${this.props.currentStyle.sale_price}`}</span>
          &nbsp;&nbsp;
          <span><s>{`$${this.props.currentStyle.original_price}`}</s></span>
        </div>
      )
    }
    return (
      <div>
        <span>{`$${this.props.currentStyle.original_price}`}</span>
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
          <br />
          <div id="styles">
            {this.props.styles.map((style, index) => (
              <Style
                style={style}
                key={index}
                onStyleClick={this.props.onStyleClick}
                currentStyle={this.props.currentStyle}
              />
            ))}
          </div>
          <AddToCart
            skus={this.props.currentStyle.skus}
            currentStyle={this.props.currentStyle}
            productName={this.props.productName}
          />
          <br />
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
