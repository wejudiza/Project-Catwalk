import React from 'react';
// import axios from 'axios';

export default class AddToCart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      size: 'Select Size',
      quantity: 0,
      skus: [],
    };
    this.handleSizeChange = this.handleSizeChange.bind(this);
    this.selectedSizeMode = this.selectedSizeMode.bind(this);
    this.onAddToCartClick = this.onAddToCartClick.bind(this);
  }

  handleSizeChange(e) {
    if (e.target.value === 'Select Size') {
      this.setState({
        size: e.target.value,
      })
    } else {
      const skuNum = e.target.options[e.target.selectedIndex].getAttribute('name');
      this.setState({
        size: e.target.value,
        quantity: this.props.skus[skuNum].quantity,
      }, () =>  console.log('cart state: ', this.state));
    }
  }

  onAddToCartClick(e) {
    if (this.state.size === 'Select Size') {

    }
  }

  selectedSizeMode() {
    var options = [...Array(16).keys()];
    options.shift();
    if (this.state.size !== 'Select Size') {
      if (this.state.quantity < 15) {
        options = [...Array(this.state.quantity + 1).keys()];
        options.shift();
      }
      return (
        <select>
          {options.map((option, index) => (
            <option value={option.value} key={index}>{option}</option>
          ))}
        </select>
      )
    }
    return (
      <select disabled="yes">
        <option>-</option>
      </select>
    )
  }

  // cartMode() {
  //   if (this.state.size === 'Select Size') {
  //     return (

  //     )
  //   }
  // }

  render() {
    return (
      <div>
        <br />
        <select defaultMenuIsOpen={true} onChange={this.handleSizeChange}>
          <option value={this.value}>Select Size</option>
          {Object.keys(this.props.skus).map((sku, index) => (
            <option name={sku} key={index}>
              {this.props.skus[sku].size}
            </option>
          ))}
        </select>
        {this.selectedSizeMode()}
        <br />
        <button type="button" id="cart">Add to Cart</button>
      </div>
    )
  }
}