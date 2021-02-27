import React from 'react';
import Modal from 'react-modal';
import Review from './Review';

class ReviewsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalView: false
    };
    this.handleAddReview = this.handleAddReview.bind(this);
  }

  handleAddReview() {
    this.setState({
      modalView: !this.state.modalView
    });
  }

  render() {
    return (
      <div id="reviewList">
        <h3>248 reviews, sorted by
          <select>
            <option>relevance</option>
            <option>newest</option>
            <option>helpful</option>
          </select>
        </h3>
        <div>
          <Review />
          <button type="button">MORE REVIEWS</button>
          <button type="button" onClick={this.handleAddReview}>ADD A REVIEW +</button>
          <Modal isOpen={this.state.modalView} ariaHideApp={false} onRequestClose={this.handleAddReview}>
            <h1>Thank your for giving your feedback</h1>
            <label>Rating</label><br />
              <select name="rating">
                <option>5</option>
                <option>4</option>
                <option>3</option>
                <option>2</option>
                <option>1</option>
              </select><br />
            <label>Summary</label><br />
              <input name="summary"></input><br />
            <label>Comments</label><br />
              <input name="body"></input><br />
            <label>Will you recommend this product?</label><br />
              <select name="recommend">
                <option>Yes</option>
                <option>No</option>
              </select><br />
            <label>Your Name</label><br />
              <input name="name"></input><br />
            <label>Your email</label><br />
              <input name="email"></input><br />
            <button type="button">Submit</button>
            <button type="button" onClick={this.handleAddReview}>Cancel</button>
          </Modal>
        </div>
      </div>
    );
  }
}

export default ReviewsList;
