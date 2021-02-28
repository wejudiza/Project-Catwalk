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
      <p>{this.props.charac_size} [size bar goes here]</p>
      <p>Comfort</p>
      <p>{this.props.charac_comfort} [comfort bar goes here]</p>
      </div>
    );
  }
}

export default ProductBreakdown;