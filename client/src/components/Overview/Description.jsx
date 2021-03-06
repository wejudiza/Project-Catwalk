import React from 'react';

const Description = (props) => {
  return (
    <div id="description">
      <div id="description-child">
        <span><b>{props.product.slogan}</b></span>
        <br />
        <p>{props.product.description}</p>
      </div>

      <span id="divider" />

      <div id="features">
        {props.features.map((feature, index) => (
          <li key={index}>{feature.feature}--{feature.value}</li>
        ))}
      </div>
    </div>
  )
}

export default Description;