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
        <div><Status completed={this.props.charac_size/5*100 || 0}/></div>
        <p>Comfort</p>
        <div><Status completed={this.props.charac_size/5*100 || 0}/></div>
      </div>
    );
  }
}

export default ProductBreakdown;