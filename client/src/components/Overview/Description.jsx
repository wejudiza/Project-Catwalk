import React from 'react';

const Description = (props) => (
  <div id="description">
    <div id="description-child">
      <span><b>{props.product.slogan}</b></span>
      <br />
      <p>{props.product.description}</p>
    </div>

    {/* <span id="divider" />

    <div id="features">
      {props.features
        ? props.features.map((feature, index) => (
          <li key={index} className="feature-item">
            {feature.feature}
            --
            {feature.value}
          </li>
        ))
        : null}
    </div> */}
  </div>
);

export default Description;
