import React from 'react';

export default class Style extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current: {},
    }
  }

  render() {
    return (
      <div key={this.props.index}>
        <img src={this.props.style.photos[0].thumbnail_url} alt="" title={this.props.style.style_id} className="styleOption" onClick={this.props.onStyleClick} />
      </div>
    )
  }
}
// const Style = (props) => (
//     <div key={this.props.index}>
//       {this.props.style.name}
//       <br />
//       <img src={this.props.style.photos[0].thumbnail_url} alt="" onClick={this.props.onStyleClick}/>
//     </div>
// );

// export default Style;