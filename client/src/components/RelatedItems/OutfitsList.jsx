import React from 'react';
import axios from 'axios';
import Outfit from './Outfit.jsx';
import Arrow from './Arrow.jsx';
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
      { width: 550, itemsToShow: 2},
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
      this.state.outfitsList.unshift(this.props.productInfo)
        this.setState({
          outfitsList: this.state.outfitsList
        });
    }
  }

  removeOutfit(outfitId) {
    console.log('outfitId', outfitId);
    console.log('displayProductsList before', this.state.displayProductsList);
    this.setState({
      outfitsList: this.state.outfitsList.filter(outfit => (
        outfitId !== outfit.id
      ))
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
            <Carousel breakPoints={this.breakPoints} itemsToShow={4}>
              <button id='outfitsBtn' className='card'  onClick={this.addOutfit}> "Click" to Add to Outfits </button>
            </Carousel>
              :
            <div className='list'>
              <Carousel breakPoints={this.breakPoints} itemsToShow={4}>
                <button id='outfitsBtn' className='card' onClick={this.addOutfit}> "Click" to Add to Outfits </button>
                {console.log('this.state.outfitsList', this.state.outfitsList)}
                {this.state.outfitsList.length ?
                  this.state.outfitsList.map((outfit, key) => {
                    return (
                      <div className='card' key={key}>
                        {/* {console.log('outfit', outfit)} */}
                        <Outfit outfit={outfit} removeOutfit={this.removeOutfit}/>
                      </div>
                    )
                  })
                  :
                  null
                }
              </Carousel>
            </div>
          }
        </div>
      </div>
    );
  }
}
