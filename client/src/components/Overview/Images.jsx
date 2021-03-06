import React from 'react';

export default class Images extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allThumbnails: [],
      display: [],
    };
    this.setDisplay = this.setDisplay.bind(this);
    this.set
  }

  componentDidMount() {
    this.setDisplay();
  }

  componentDidUpdate(prevProps) {
    if (this.props.currentImage !== prevProps.currentImage) {
      this.setDisplay();
      // this.setState({
      //   allThumbnails: this.props.images,
      // });
    }
  }

  setDisplay() {
    let allThumbnails = this.props.images.map((image, index) => (
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
    if (allThumbnails.length > 7) {
      allThumbnails = allThumbnails.slice(0, 7);
    }
    this.setState({
      display: allThumbnails,
    });
    // return (
    // <div className="thumbnailContainer">
    //   {allThumbnails}
    // </div>
    // );
  }

  render() {
    if (this.state.display.length !== 0) {
      return (
        <div>
          <div className="thumbnailContainer">
            {this.state.display}
          </div>
          {/* <div className="thumbnailContainer">
            {this.props.images.map((image, index) => (
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
            ))}
          </div> */}
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
