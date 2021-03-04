import React from 'react';
import axios from 'axios';
import Outfit from './Outfit.jsx';

export default class OutfitsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      outfitsList: [],
    };
    this.addOutfit = this.addOutfit.bind(this);
  }

  addOutfit() {
    const outfitFound = this.state.outfitsList.find((outfit) => (
      // console.log('outfit.id', outfit.id),
      outfit.id === this.props.currentProduct
    ))
    // console.log('outfitFound', outfitFound)
    if (outfitFound === undefined) {
      axios.get(`/api/products/${this.props.currentProduct}`)
        .then((results) => {
          // console.log('results.data', results.data)
          // CHECK IF ID EXISTS IN OUTFITS LIST, if exists -> don't push, otherwise do push
          this.state.outfitsList.push(results.data)
          this.setState({
            outfitsList: this.state.outfitsList
          });
        })
        .catch((err) => console.log('addOutfit err: ', err));
    }
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
            <button className='card' id='outfitsBtn' onClick={this.addOutfit}> "Click" to Add to Outfits </button>
            :
            <div className='list'>
              {this.state.outfitsList.map((outfit, key) => {
                return (
                  <div className='card' key={key}>
                    {/* {console.log('outfit', outfit)} */}
                    <Outfit outfit={outfit}/>
                  </div>
                )
              })}
              <button className='card' id='outfitsBtn' onClick={this.addOutfit}> "Click" to Add to Outfits </button>
            </div>
          }
        </div>
      </div>
    );
  }
}
