import React from 'react';

class ImgDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    // console.log(typeof this.props.arrOfPhotos[0].url)
    if (this.props.arrOfPhotos !== undefined & this.props.arrOfPhotos !== null) {
      return (
        <div>
          {this.props.arrOfPhotos.map((photoObj) => {
            if (photoObj.url[0] === 'h') {
              return (
                <img
                  key={photoObj.id}
                  src={photoObj.url}
                  style={{
                    width: 200,
                    verticalAlign: "center"
                  }}
                />
              );
            } else {
              return null;
            }
          })}
        </div>
      );
    }
    return null;
  }
}

export default ImgDisplay;
