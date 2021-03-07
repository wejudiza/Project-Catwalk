import React from 'react';

class Zoom extends React.Component {
  state = {
    backgroundImage: `url(${src})`,
    backgroundPosition: '0% 0%'
  }

  handleMouseMove = e => {
    const { left, top, width, height } = e.target.getBoundingClientRect()
    const x = (e.pageX - left) / width * 100
    const y = (e.pageY - top) / height * 100
    this.setState({ backgroundPosition: `${x}% ${y}%` })
  }

  render = () =>
    <figure onMouseMove={this.handleMouseMove} style={this.state}>
      <img src={src} />
    </figure>
}

export default Zoom;
