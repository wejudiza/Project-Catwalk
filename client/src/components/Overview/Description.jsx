import React from 'react';

const Description = (props) => {
  return (
    <div id="description">
      <br />
      <span><b>{props.product.slogan}</b></span>
      <br />
      <p>{props.product.description}</p>
    </div>
  )
}

export default Description;