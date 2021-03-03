import React from 'react';
import axios from 'axios';
import Outfit from './Outfit.jsx';

export default class OutfitsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      outfitsListId: [],
    };
  }

  // Map over a get request of the related items
  render() {
    return (
      <div>
        <h4>
        Outfits List
        </h4>
        <div className='list'>
          <div className='card'>
            <Outfit />
          </div>
          <div>

          </div>
        </div>
      </div>
    );
  }
}
