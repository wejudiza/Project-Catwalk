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
        <br />
        <select>
          Choose Size
          <option>--Sizes--</option>
            {Object.keys(this.props.currentStyle.skus).map((sku, index) => {
              return(
                <option key={index}>
                  {this.props.currentStyle.skus[sku].size}
                </option>)
            })}
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

// const AddToCart = (props) => {
//   // if (!props.currentStyle !== undefined) {
//   //   return null;
//   // }
//   return (
//     <div>
//       <br />
//       <select>
//         Choose Size
//         <option>--Sizes--</option>
//         <option>
//           {/* {console.log('current style: ', props.currentStyle)} */}
//         </option>
//       </select>
//       <select>
//         Choose Quantity
//         <option>--Quantity--</option>
//       </select>
//       <br />
//       <button type="button" id="cart ">Add to Cart</button>
//     </div>
//   )
// };

// export default AddToCart;