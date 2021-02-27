import React from 'react';

class ProductBreakdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div id="productBreakdown">
      <p>Size</p>
      <p>[size bar goes here]</p>
      <p>Comfort</p>
      <p>[comfort bar goes here]</p>
      </div>
    );
  }
}

export default ProductBreakdown;