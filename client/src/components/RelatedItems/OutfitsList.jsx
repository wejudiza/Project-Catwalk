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
    this.removeOutfit = this.removeOutfit.bind(this);
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

  removeOutfit(outfitId) {
    console.log('outfitId', outfitId);
    console.log('outfitsList before', this.state.outfitsList);
    this.setState({
      outfitsList: this.state.outfitsList.filter(outfit => (
        outfitId !== outfit.id
      ))
    }, () => {
      console.log('outfitsList after', this.state.outfitsList);
    })
  }

  render() {
    return (
      <div>
        <h4>
        Outfits List
        </h4>
        <div>
          {this.state.outfitsList.length === 0 ?
            <button id='outfitsBtn' className='card'  onClick={this.addOutfit}> "Click" to Add to Outfits </button>
            :
            <div className='list'>
              <button id='outfitsBtn' className='card' onClick={this.addOutfit}> "Click" to Add to Outfits </button>
              {this.state.outfitsList.map((outfit, key) => {
                return (
                  <div className='card' key={key}>
                    {/* {console.log('outfit', outfit)} */}
                    <Outfit outfit={outfit} removeOutfit={this.removeOutfit}/>
                  </div>
                )
              })}
            </div>
          }
        </div>
      </div>
    );
  }
}
