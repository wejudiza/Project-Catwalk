import React from 'react';
// import axios from 'axios';
import Select from 'react-select'

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
    // this.changedSkuMode = this.changedSkuMode.bind(this);
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
      });
    }
  }

  onAddToCartClick(e) {
    if (this.state.size === 'Select Size') {

    } else {

    }
  }

  selectedSizeMode() {
    var options = [...Array(16).keys()];
    options.shift();
    if (this.state.size !== 'Select Size') {
      if (this.state.quantity < 15) {
        options = [...Array(this.state.quantity + 1).keys()];
        options.shift();
        console.log('options: ', options);

      }
      return (
        <Select options={options}>
          {/* {options.map((option, index) => (
            <option value={option.value} key={index}>{option}</option>
          ))} */}
        </Select>
      )
    }
    return (
      <Select isDisabled={true} options={['-']}>
        {/* <option>-</option> */}
      </Select>
    )
  }

  // changedSkuMode(prevProps) {
  //   if (this.props.skus !== prevProps) {
  //     this.setState({
  //       size: 'Select Size',
  //     })
  //   }
  // }

  // cartMode() {
  //   if (this.state.size === 'Select Size') {
  //     return (

  //     )
  //   }
  // }

  render() {
    const sizes = Object.keys(this.props.skus).map((sku, index) => (
      {'value': this.props.skus[sku].size, 'label': this.props.skus[sku].size}
    ))
    return (
      <div>
        <br />
        <Select options={sizes} placeholder={'Select Size'}>
        </Select>
        {this.selectedSizeMode()}
        <br />
        <button type="button" id="cart">Add to Cart</button>
      </div>
    )
    // return (
    //   <div>
    //     <br />
    //     <Select onChange={this.handleSizeChange}>
    //       <option value={this.value}>Select Size</option>
    //       {Object.keys(this.props.skus).map((sku, index) => (
    //         {value:{sku.size}, label: {sku,size}}
    //         // <option name={sku} key={index}>
    //         //   {this.props.skus[sku].size}
    //         // </option>
    //       ))}
    //     </Select>
    //     {this.selectedSizeMode()}
    //     <br />
    //     <button type="button" id="cart">Add to Cart</button>
    //   </div>
    // )
  }
}