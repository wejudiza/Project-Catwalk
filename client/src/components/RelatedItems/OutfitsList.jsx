import React from 'react';
import axios from 'axios';
import Outfit from './Outfit.jsx';
import Carousel from "react-elastic-carousel";

export default class OutfitsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      outfitsList: []
    };
    this.addOutfit = this.addOutfit.bind(this);
    this.removeOutfit = this.removeOutfit.bind(this);
    this.breakPoints = [
      { width: 1, itemsToShow: 1 },
      { width: 550, itemsToShow: 2 },
      { width: 850, itemsToShow: 3 },
      { width: 1150, itemsToShow: 4 },
      { width: 1450, itemsToShow: 5 }
    ];
  }

  addOutfit() {
    const outfitFound = this.state.outfitsList.find((outfit) => (
      outfit.id === this.props.currentProduct
    ))
    // CHECK IF ID EXISTS IN OUTFITS LIST, if exists -> don't push, otherwise do push
    if (outfitFound === undefined) {
      // Concat let's us make a copy
      let newOutfitsList = [].concat(this.state.outfitsList)
      newOutfitsList.unshift(this.props.productInfo)
      this.setState({
        outfitsList: newOutfitsList
      });
      if (localStorage.outfitsList === undefined) {
        localStorage.setItem('outfitsList', JSON.stringify(newOutfitsList));
        // console.log('localStorage.outfitsList', localStorage.outfitsList);
      } else {
        let storedOutfits = JSON.parse(localStorage.outfitsList)
        storedOutfits.unshift(this.props.productInfo);
        localStorage.setItem('outfitsList', JSON.stringify(storedOutfits));
        // console.log('localStorage.outfitsList', localStorage.outfitsList);
      }
    }
  }

  removeOutfit(outfitId) {
    this.setState({
      outfitsList: this.state.outfitsList.filter(outfit => (
        outfitId !== outfit.id
      ))
    })
    let storedOutfits = JSON.parse(localStorage.outfitsList);
    let filteredOutfits = storedOutfits.filter(outfit => (
      outfitId !== outfit.id
    ))
    localStorage.setItem('outfitsList', JSON.stringify(filteredOutfits))
  }


  render() {
    return (
      <div>
        <h3 className=" widgetHeader title">
          OUTFITS LIST
        </h3>
        <div>
          <div className='list'>
            {/* Need to set showEmptySlots to true */}
            <Carousel breakPoints={this.breakPoints} itemsToShow={4} showEmptySlots>
              <div className='card'>
                <button id='outfitsBtn' onClick={this.addOutfit}>
                <div style={{fontSize: '24px'}}>Add to Outfit</div>
                +
                </button>
              </div>
              {/* {console.log((localStorage.outfitsList))} */}
              {localStorage.outfitsList ?
                JSON.parse(localStorage.outfitsList).map((outfit, key) => (
                  <div className='card' key={`${outfit.id}-${key}`}>
                    <Outfit outfit={outfit} removeOutfit={this.removeOutfit} />
                  </div>
                ))
                :
                this.state.outfitsList.map((outfit, key) => (
                  <div className='card' key={`${outfit.id}-${key}`}>
                    <Outfit outfit={outfit} removeOutfit={this.removeOutfit} />
                  </div>
                ))
              }
            </Carousel>
          </div>
        </div>
      </div>
    );
  }
}
