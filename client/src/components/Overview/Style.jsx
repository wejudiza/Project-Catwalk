import React from 'react';

const Style = (props) => {
  const currentStyleMode = () => {
    if (props.currentStyle.name === props.style.name) {
      return (
        <i className="far fa-check-circle" />
      );
    }
  };

  return (
    <div>
      <div key={props.index} id="style-container">
        <img
          src={props.style.photos[0].thumbnail_url}
          alt=""
          title={props.style.style_id}
          className="style-option"
          onClick={props.onStyleClick}
        />
        {currentStyleMode()}
      </div>
    </div>
  );
};

export default Style;

// export default class Style extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       current: {},
//     }
//   }

//   render() {
//     return (
//       <div>
//         <div key={this.props.index} id="style-container">
//           <img
//             src={this.props.style.photos[0].thumbnail_url}
//             alt=""
//             title={this.props.style.style_id}
//             className="style-option"
//             onClick={this.props.onStyleClick}
//           />
//           <i className="far fa-check-circle"></i>
//         </div>
//       </div>
//     )
//   }
// }