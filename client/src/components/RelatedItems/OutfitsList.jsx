import React from 'react';
import axios from 'axios';
import Outfit from './Outfit.jsx';

export default class OutfitsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  // Map over a get request of the related items
  render() {
    return (
      <div>
        Outfits List
        <Outfit />
      </div>
    );
  }
}
