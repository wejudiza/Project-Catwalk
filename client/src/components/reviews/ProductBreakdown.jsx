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
      <div className="container-productBreakdown">

        <p className="size">Size</p>

        <div className="size-bar">
          <Status completed={this.props.charac_size/5*100 || 0}/>
        </div>

        <div className="small">Too small</div>
        <div className="perfect">Perfect</div>
        <div className="large">Too large</div>
        <p className="comfort">Comfort</p>

        <div className="comfort-bar">
          <Status completed={this.props.charac_comfort/5*100 || 0}/>
        </div>

        <div className="poor">Poor</div>
        <div className="comfort-perfect">Perfect</div>

      </div>
    );
  }
}

export default ProductBreakdown;