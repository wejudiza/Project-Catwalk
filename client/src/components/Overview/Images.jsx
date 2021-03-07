import React from 'react';

export default class Images extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentImageIndex: 0,
      thumbnails: [],
      mappedThumbnails: [],
      rawDisplay: [],
      display: [],
      numberToDisplay: 7,
      displayStartIndex: 0,
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
    const newDisplay = this.state.mappedThumbnails.slice(newStartIndex, newStartIndex + 7);
    this.setState({
      rawDisplay: this.state.thumbnails.slice(newStartIndex, newStartIndex + 7),
      display: newDisplay,
      displayStartIndex: newStartIndex,
    });
  }

  onUpArrowClick() {
    const newStartIndex = this.state.displayStartIndex - 1;
    const newDisplay = this.state.mappedThumbnails.slice(newStartIndex, newStartIndex + 7);
    this.setState({
      rawDisplay: this.state.thumbnails.slice(newStartIndex, newStartIndex + 7),
      display: newDisplay,
      displayStartIndex: newStartIndex,
    });
  }

  setDisplay() {
    const currentImageIndex = this.props.currentImageIndex;
    const allThumbnails = this.props.images;
    const mappedThumbnails = this.props.images.map((image, index) => (
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
    let displayedThumbnails = mappedThumbnails.slice(0, 7);
    let rawDisplay = allThumbnails.slice(0, 7);
    let start = 0;
    if (currentImageIndex > 6 && currentImageIndex < 14) {
      start = 7;
      displayedThumbnails = mappedThumbnails.slice(currentImageIndex - 6, currentImageIndex + 1);
      rawDisplay = allThumbnails.slice(currentImageIndex - 6, currentImageIndex + 1);
    } else if (currentImageIndex > 13 && currentImageIndex < 21) {
      start = 14;
    }
    this.setState({
      currentImage: this.props.currentImage,
      currentImageIndex: currentImageIndex,
      thumbnails: this.props.images,
      mappedThumbnails: mappedThumbnails,
      rawDisplay: rawDisplay,
      display: displayedThumbnails,
      displayStartIndex: start,
    });
  }

  render() {
    const lastDisplayIndex = this.state.display.length - 1;
    const lastThumbnailIndex = this.state.thumbnails.length - 1;
    if (this.state.thumbnails.length !== 0) {
      return (
        <div>
          {this.state.displayStartIndex !== 0
            ? <i className="fas fa-chevron-up" onClick={this.onUpArrowClick} />
            : null
          }
          <div className="thumbnailContainer">
            {this.state.display}
          </div>
          {this.state.thumbnails.length > 7
          && this.state.rawDisplay[lastDisplayIndex].url !== this.state.thumbnails[lastThumbnailIndex].url
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
