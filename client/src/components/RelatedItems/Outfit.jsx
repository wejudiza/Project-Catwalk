import React from 'react';
import axios from 'axios';
import OutfitStars from './OutfitStars.jsx';

export default class Outfit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      name: '',
      category: '',
      ratings: {},
      thumbnail_url: '',
      original_price: '',
      sale_price: '',
      avgStars: 0,
    };
    this.getStyles = this.getStyles.bind(this);
    this.getReviews = this.getReviews.bind(this);
    this.salePriceMode = this.salePriceMode.bind(this);
  }

  componentDidMount() {
    this.getStyles(this.props.outfit.id);
    this.getReviews(this.props.outfit.id);
  }

  componentDidUpdate(prevProps) {
    if (this.props.outfit.id !== prevProps.outfit.id) {
      this.getStyles(this.props.outfit.id);
      this.getReviews(this.props.outfit.id);
    }
  }

  getStyles(productId) {
    // axios.get(`api/products/${productId}/styles`)
    //   .then((results) => {
    //     // console.log('style results', results.data);
    //     this.setState({
    //       thumbnail_url: results.data.results[0].photos[0].thumbnail_url,
    //       original_price: results.data.results[0].original_price,
    //       sale_price: results.data.results[0].sale_price,
    //     });
    //   })
    //   .catch((err) => console.log('getStyles err: ', err));
    let dataName = `${productId}_styles`;
    this.setState({
      thumbnail_url: JSON.parse(localStorage[dataName])[0].photos[0].thumbnail_url || '',
      original_price: JSON.parse(localStorage[dataName])[0].original_price,
      sale_price: JSON.parse(localStorage[dataName])[0].sale_price,
    });
  }

  getReviews(productId) {
    axios.get('api/reviews', {
      params: {
        product_id: productId,
      }
    })
      .then((rawData) => {
        // console.log(rawData.data.results)
        let arrOfReviews = rawData.data.results
        let totalRating = 0;
        arrOfReviews.forEach((review) => {
          totalRating += review.rating;
        });
        // console.log('totalRating', totalRating)
        // console.log('arrOfReviews.length', arrOfReviews.length)
        this.setState({
          avgStars: totalRating/ arrOfReviews.length
        })
      })
      .catch((err) => console.log('getReviews err: ', err));
  }

  // SALE PRICE STRIKETHOUGH
  salePriceMode() {
    return(
      this.state.sale_price ?
        <div>
          <span style={{ color: 'red' }}>${this.state.sale_price}</span>
          {'  '}
          <span><s>${this.state.original_price}</s></span>
        </div>
      :
        <div>
          <span>${this.state.original_price}</span>
          {/* {' '}
          <em>(Other Styles May Be On Sale!)</em> */}
        </div>
    )
  }


  // Map over a get request of the related items
  render() {
    return (
      <div>
        <button className="fas fa-times-circle" type="button" id="modalBtn"onClick={() => this.props.removeOutfit(this.props.outfit.id)}></button>
        {this.state.thumbnail_url ?
          <img className="cardImg" src={this.state.thumbnail_url}/>
          :
          <div className="cardImg">
            <div className="cardImgNone">NO IMAGE AVAILABLE </div>
          </div>
        }
        <div className='cardText'>
          <div style={{fontSize: '14px'}}>
            {this.props.outfit.category}
          </div>
          <div style={{fontSize: '20px'}}>
            <b>{this.props.outfit.name}</b>
          </div>
          <div style={{fontSize: '14px', margin:'5px 0px'}}>
            {this.salePriceMode()}
          </div>
          <div style={{fontSize: '14px'}}>
            {this.state.avgStars ?
              <OutfitStars avgStars={this.state.avgStars}/>
              :
              <OutfitStars avgStars={0}/>
            }
          </div>
        </div>
      </div>
    );
  }
}
