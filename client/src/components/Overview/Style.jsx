import React from 'react';

const Style = (props) => (
  <div key={index}>
    {props.style.name}
    <br />
    <img src={props.style.photos[0].thumbnail_url} alt="" />
  </div>
);

export default Style;
