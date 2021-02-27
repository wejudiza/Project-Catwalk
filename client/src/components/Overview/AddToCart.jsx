import React from 'react';
// import axios from 'axios';

export default class AddToCart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      style: [],
    };
  }

  render() {
    return (
      <div>
        This is where the AddToCart goes
        <br />
        <select>
          Choose Size
          <option>--Sizes--</option>
          <option>
            {/* {console.log('current style: ', this.props.currentStyle)} */}
          </option>
        </select>
        <select>
          Choose Quantity
          <option>--Quantity--</option>
        </select>
        <br />
        <button type="button" id="cart ">Add to Cart</button>
      </div>
    )
  }
}