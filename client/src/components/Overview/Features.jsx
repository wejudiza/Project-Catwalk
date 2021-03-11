import React from 'react';

const Features = (props) => (
  <div id="features">
    <span id="divider" />
    <div>
      {props.features
        ? props.features.map((feature, index) => (
          <li key={index} className="feature-item">
            {feature.feature}
            {' '}
            -
            {' '}
            {feature.value}
          </li>
        ))
        : null}
    </div>
  </div>
);

export default Features;
