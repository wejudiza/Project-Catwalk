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
  }

  getStyles(productId) {
    axios.get(`api/products/${productId}/styles`)
      .then((results) => {
        // console.log('style results', results.data);
        this.setState({
          thumbnail_url: results.data.results[0].photos[0].thumbnail_url,
          original_price: results.data.results[0].original_price,
          sale_price: results.data.results[0].sale_price,
        });
      })
      .then(() => {
        this.getReviews(this.props.outfit.id)
      })
      .catch((err) => console.log('getStyles err: ', err));
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
          {' '}
          <em>(Other Styles May Be On Sale!)</em>
        </div>
    )
  }


  // Map over a get request of the related items
  render() {
    return (
      <div>
        {this.state.thumbnail_url ?
          <img className="cardImg" src={this.state.thumbnail_url}/>
          :
          <img className="cardImg" src={'https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg'}/>
        }
        <div className='cardText'>
          <div>
            {this.props.outfit.category}
          </div>
          <div>
            {this.props.outfit.name}
          </div>
          <div>
            {this.salePriceMode()}
          </div>
          <div>
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
