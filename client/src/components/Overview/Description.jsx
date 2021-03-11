import React from 'react';

const Description = (props) => (
  <div id="description">
    <div id="description-child">
      <span><b>{props.product.slogan}</b></span>
      <br />
      <p>{props.product.description}</p>
    </div>
  </div>
);

export default Description;
