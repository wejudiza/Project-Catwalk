import React from 'react';

const Arrow = ({className, clickFunc, currentProductIndex, lastIndex}) => {
  return (
    <button className={className} onClick={clickFunc}>
    </button>
  )
};

export default Arrow;



// const Arrow = ({ direction, clickFunction, glyph }) => (
//   <div
//     className={ `slide-arrow ${direction}` }
//     onClick={ clickFunction }>
//     { glyph }
//   </div>
// );

// export default Arrow;