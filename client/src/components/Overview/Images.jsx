import React from 'react';

export default class Images extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentImageIndex: 0,
      thumbnails: [],
      display: [],
      displayStartIndex: 0,
      displayEndIndex: 7,
    };
    this.setDisplay = this.setDisplay.bind(this);
    this.onDownArrowClick = this.onDownArrowClick.bind(this);
    this.onUpArrowClick = this.onUpArrowClick.bind(this);
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
    const newDisplay = this.state.thumbnails.slice(newStartIndex, newEndIndex);
    this.setState({
      display: newDisplay,
      displayStartIndex: newStartIndex,
      displayEndIndex: newEndIndex,
    });
  }

  onUpArrowClick() {
    const newStartIndex = this.state.displayStartIndex - 1;
    const newEndIndex = this.state.displayEndIndex - 1;
    const newDisplay = this.state.thumbnails.slice(newStartIndex, newEndIndex);
    this.setState({
      display: newDisplay,
      displayStartIndex: newStartIndex,
      displayEndIndex: newEndIndex,
    });
  }

  setDisplay() {
    const currentImageIndex = this.props.currentImageIndex;
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
    let displayedThumbnails = allThumbnails.slice(0, 7);
    // if (currentImageIndex > 6) {
    //   displayedThumbnails = allThumbnails.slice(currentImageIndex - 6, currentImageIndex + 1)
    // }
    this.setState({
      currentImageIndex: currentImageIndex,
      thumbnails: allThumbnails,
      display: displayedThumbnails,
      displayStartIndex: currentImageIndex,
      displayEndIndex: currentImageIndex + 7,
      // displayStartIndex: 0,
      // displayEndIndex: 7,
    });
  }

  render() {
    if (this.state.display.length !== 0) {
      return (
        <div>
          {this.state.displayStartIndex !== 0
            ? <i className="fas fa-chevron-up" onClick={this.onUpArrowClick} />
            : null
          }
          <div className="thumbnailContainer">
            {this.state.display}
          </div>
          {this.state.thumbnails.length > 7 && this.state.displayEndIndex < (this.state.thumbnails.length)
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
