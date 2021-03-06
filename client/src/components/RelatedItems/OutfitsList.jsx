import React from 'react';
import axios from 'axios';
import Outfit from './Outfit.jsx';
import Arrow from './Arrow.jsx';
import Carousel from "react-elastic-carousel";

export default class OutfitsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      outfitsList: [],
      displayProductsList: [],
      currentProductIndex: 0,
      itemsToDisplay: 3,
    };
    this.addOutfit = this.addOutfit.bind(this);
    this.removeOutfit = this.removeOutfit.bind(this);
    this.nextSlide = this.nextSlide.bind(this);
    this.previousSlide = this.previousSlide.bind(this);
    // this.breakPoints = [
    //   { width: 1, itemsToShow: 1 },
    //   { width: 550, itemsToShow: 2},
    //   { width: 850, itemsToShow: 3 },
    //   { width: 1150, itemsToShow: 4 },
    //   { width: 1450, itemsToShow: 5 },
    //   { width: 1750, itemsToShow: 6 },
    // ]
  }

  addOutfit() {
    const outfitFound = this.state.outfitsList.find((outfit) => (
      outfit.id === this.props.currentProduct
    ))
    if (outfitFound === undefined) {
      axios.get(`/api/products/${this.props.currentProduct}`)
        .then((results) => {
          // console.log('results.data', results.data)
          // CHECK IF ID EXISTS IN OUTFITS LIST, if exists -> don't push, otherwise do push
          this.state.outfitsList.push(results.data)
          this.setState({
            outfitsList: this.state.outfitsList,
            displayProductsList: this.state.outfitsList.slice(this.state.currentProductIndex, this.state.currentProductIndex + this.state.itemsToDisplay)
          });
        })
        .catch((err) => console.log('addOutfit err: ', err));
    }
  }

  removeOutfit(outfitId) {
    console.log('outfitId', outfitId);
    console.log('displayProductsList before', this.state.displayProductsList);
    this.setState({
      outfitsList: this.state.outfitsList.filter(outfit => (
        outfitId !== outfit.id
      )),
      displayProductsList: this.state.displayProductsList.filter(outfit => (
        outfitId !== outfit.id
      ))
    }, () => {
      console.log('displayProductsList after', this.state.displayProductsList);
    })
  }

  previousSlide () {
    const currentIndex = this.state.currentProductIndex - 1;

    this.setState({
      currentProductIndex: currentIndex,
      displayProductsList: this.state.outfitsList.slice(currentIndex, currentIndex + this.state.itemsToDisplay)
    }, () => {
      console.log('this.state', this.state)
    });
  }

  nextSlide () {
    const currentIndex =  this.state.currentProductIndex + 1;

    this.setState({
      currentProductIndex: currentIndex,
      displayProductsList: this.state.outfitsList.slice(currentIndex, currentIndex + this.state.itemsToDisplay)
    }, () => {
      console.log('this.state', this.state)
    });
  }

  render() {
    return (
      <div>
        <h4>
        Outfits List
        </h4>
        <div>
          {this.state.outfitsList.length === 0 ?
            <>
              <Arrow className='fas fa-caret-left slide-arrow left-arrow'
              />
              <button id='outfitsBtn' className='card'  onClick={this.addOutfit}> "Click" to Add to Outfits </button>
              <Arrow className='fas fa-caret-right slide-arrow right-arrow'/>
            </>
              :
            <div className='list'>
              {/* <Carousel breakPoints={this.breakPoints}> */}
              <Arrow className='fas fa-caret-left slide-arrow left-arrow'
              clickFunc={this.previousSlide}
              productsListLength={this.state.outfitsList.length}
              displayProductsListLength={this.state.displayProductsList.length}
              firstProductId={this.state.outfitsList[0]}
              firstDisplayProductId={this.state.displayProductsList[0]}
              />
                <button id='outfitsBtn' className='card' onClick={this.addOutfit}> "Click" to Add to Outfits </button>
                {this.state.displayProductsList.map((outfit, key) => {
                  return (
                    <div className='card' key={key}>
                      {/* {console.log('outfit', outfit)} */}
                      <Outfit outfit={outfit} removeOutfit={this.removeOutfit}/>
                    </div>
                  )
                })}
              <Arrow className='fas fa-caret-right slide-arrow right-arrow'
              clickFunc={this.nextSlide}
              productsListLength={this.state.outfitsList.length}
              displayProductsListLength={this.state.displayProductsList.length}
              lastProductId={this.state.outfitsList[this.state.outfitsList.length - 1].id}
              lastDisplayProductId={this.state.displayProductsList[this.state.displayProductsList.length - 1].id}
              />
              {/* </Carousel> */}
            </div>
          }
        </div>
      </div>
    );
  }
}
