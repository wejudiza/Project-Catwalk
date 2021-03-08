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
      backgroundImage: `url(${this.props.currentImageUrl})`
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
      <figure onMouseMove={this.handleMouseMove} style={this.state}>
        <img
          src={this.props.currentImageUrl}
          onClick={this.props.onExpandedClick}
        />
      </figure>
    )
  }
}

export default Zoom;
