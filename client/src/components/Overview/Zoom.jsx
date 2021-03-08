import React from 'react';

class Zoom extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      backgroundImage: '',
      backgroundPosition: '0% 0%'
    }
    this.handleMouseMove = this.handleMouseMove.bind(this);
  }

  componentDidMount() {
    this.setState({
      backgroundImage: `url(${this.props.image})`
    });
  }

  handleMouseMove(e) {
    const { left, top, width, height } = e.target.getBoundingClientRect();
    const x = (e.pageX - left) / width * 100;
    const y = (e.pageY - top) / height * 100;
    this.setState({
      backgroundPosition: `${x}% ${y}%`,
    });
  }

  render() {
    return (
      <figure
        onMouseMove={this.handleMouseMove}
        onClick={this.props.onExpandedClick}
        style={this.state}
      >
        <img
          alt=""
          id="zoomed-img"
          src={this.props.image}
          // onClick={this.props.onExpandedClick}
        />
      </figure>
    )
  }
}

export default Zoom;
