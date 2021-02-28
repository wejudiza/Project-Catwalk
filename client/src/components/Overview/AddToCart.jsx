import React from 'react';
// import axios from 'axios';

export default class AddToCart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      size: null,
      sku: null,
      quantity: null,
    };
    this.handleSizeChange = this.handleSizeChange.bind(this);
    this.selectedSizeMode = this.selectedSizeMode.bind(this);
  }

  handleSizeChange(e) {
    var skuNum = e.target.options[e.target.selectedIndex].getAttribute('name');
    this.setState({
      size: e.target.value,
      sku: skuNum,
      quantity: this.props.skus[skuNum].quantity,
    });
  }

  selectedSizeMode() {
    var options = [...Array(16).keys()];
    options.shift();
    if (this.state.size) {
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

  render() {
    return (
      <div>
        <br />
        <select onChange={this.handleSizeChange}>
          <option>Select Size</option>
          {Object.keys(this.props.skus).map((sku, index) => (
            <option name={sku} key={index}>
              {this.props.skus[sku].size}
            </option>
          ))}
        </select>
        {this.selectedSizeMode()}
        <br />
        <button type="button" id="cart ">Add to Cart</button>
      </div>
    )
  }
}
