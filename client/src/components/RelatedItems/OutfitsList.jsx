import React from 'react';
import axios from 'axios';
import Outfit from './Outfit.jsx';

export default class OutfitsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      outfitsList: [],
    };
    this.getProduct = this.getProduct.bind(this);
  }

  getProduct() {
    axios.get(`/api/products/${this.props.currentProduct}`)
      .then((results) => {
        console.log('results.data', results.data)
        this.state.outfitsList.push(results.data)
        this.setState({
          outfitsList: this.state.outfitsList
        }, () => {
          console.log('this.state', this.state)
        });
      })
      .catch((err) => console.log('getProduct err: ', err));
  }


  render() {
    return (
      <div>
        <h4>
        Outfits List
        </h4>
        <div>
          {/* *** Include additional logic to check if that outfit ID has already been included in outfitsList */}
          {this.state.outfitsList.length === 0 ?
            <button className='card' id='outfitsBtn' onClick={this.getProduct}> "Click" to Add to Outfits </button>
            :
            <div className='list'>
              {this.state.outfitsList.map((outfit, key) => {
                return (
                  <div className='card'>
                    {console.log('outfit', outfit)}
                    <Outfit outfit={outfit}/>
                  </div>
                )
              })}
              <button className='card' id='outfitsBtn' onClick={this.getProduct}> "Click" to Add to Outfits </button>
            </div>
          }
        </div>
      </div>
    );
  }
}
