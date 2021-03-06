import React from 'react';

export default class Images extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      thumbnails: [],
      testThumb: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      testDisplay: [0, 1, 2, 3, 4, 5, 6],
      display: [],
      displayStartIndex: 0,
      displayEndIndex: 7,
    };
    this.setDisplay = this.setDisplay.bind(this);
    this.onDownArrowClick = this.onDownArrowClick.bind(this);
  }

  componentDidMount() {
    this.setDisplay();
  }

  componentDidUpdate(prevProps) {
    if (this.props.currentImage !== prevProps.currentImage) {
      this.setDisplay();
    }
  }

  onDownArrowClick() {
    const newStartIndex = this.state.displayStartIndex + 1;
    const newEndIndex = this.state.displayEndIndex + 1;
    // const newDisplay = this.state.thumbnails.slice(newStartIndex, newEndIndex);
    const newDisplay = this.state.testThumb.slice(newStartIndex, newEndIndex);
    this.setState({
      // display: newDisplay,
      displayStartIndex: newStartIndex,
      displayEndIndex: newEndIndex,
      testDisplay: newDisplay,
    });
  }

  setDisplay() {
    const allThumbnails = this.props.images.map((image, index) => (
      <div key={index}>
        {this.props.currentImage.url === image.url
          ? (
            <img
              alt=""
              src={image.thumbnail_url}
              title={image.url}
              onClick={this.props.onImageClick}
              key={index}
              className="selected-thumbnail"
            />
          )
          : (
            <img
              alt=""
              src={image.thumbnail_url}
              title={image.url}
              onClick={this.props.onImageClick}
              key={index}
              className="thumbnails"
            />
          )}
      </div>
    ));
    const displayedThumbnails = allThumbnails.slice(0, 7);
    this.setState({
      // thumbnails: allThumbnails,
      display: displayedThumbnails,
      testThumb: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      testDisplay: [0, 1, 2, 3, 4, 5, 6],
    });
  }

  render() {
    if (this.state.display.length !== 0) {
      return (
        <div>
          <div className="thumbnailContainer">
            {this.state.display}
          </div>
          {this.props.images.length > 7
            ? <i className="fas fa-chevron-down" id="downArrow" onClick={this.onDownArrowClick} />
            : null}
        </div>
      );
    }
    return (
      <div>
        Loading thumbnails...
      </div>
    );
  }
}

// const Images = (this.props) => (
// <div>
//   <div className="thumbnailContainer">
//     {props.images.map((image, index) => (
//       <div key={index}>
//         {props.currentImage.url === image.url
//           ? (
//             <img
//               alt=""
//               src={image.thumbnail_url}
//               title={image.url}
//               onClick={props.onImageClick}
//               key={index}
//               className="selected-thumbnail"
//             />
//           )
//           : (
//             <img
//               alt=""
//               src={image.thumbnail_url}
//               title={image.url}
//               onClick={props.onImageClick}
//               key={index}
//               className="thumbnails"
//             />
//           )}
//       </div>
//     ))}
//   </div>
// </div>
// );

// export default Images;
