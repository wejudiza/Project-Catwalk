import React from 'react';
import Status from './StatusBar';

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
      <p><Status completed={this.props.charac_size/5*100 || 0}/></p>
      <p>Comfort</p>
      <p><Status completed={this.props.charac_size/5*100 || 0}/></p>
      </div>
    );
  }
}

export default ProductBreakdown;