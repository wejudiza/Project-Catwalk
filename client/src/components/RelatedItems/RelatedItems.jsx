import React from 'react';
import axios from 'axios';
import ProductsList from './ProductsList';
import OutfitsList from './OutfitsList';

export default class RelatedItems extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div>
        <h3>
          RELATED ITEMS & COMPARISON
        </h3>
        <div>
          <ProductsList />
        </div>
        <div>
          <OutfitsList />
        </div>
      </div>
    );
  }
}
