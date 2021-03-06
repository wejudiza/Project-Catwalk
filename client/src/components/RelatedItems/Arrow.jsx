import React from 'react';

const Arrow = ({className, clickFunc, productsListLength, displayProductsListLength, lastProductId, lastDisplayProductId, currentProductId, firstDisplayProductId}) => {
  // if (productsListLength !== displayProductsListLength && lastProductId !== lastDisplayProductId
  //   ||
  //   productsListLength !== displayProductsListLength && currentProductId !== firstDisplayProductId
  //   ) {
  //   // console.log('lastProductId', lastProductId);
  //   // console.log('lastDisplayProductId', lastDisplayProductId);
  //   console.log('currentProductId', currentProductId);
  //   console.log('firstDisplayProductId', firstDisplayProductId);
  //   return (
  //     <button className={className} onClick={clickFunc}>
  //     </button>
  //   )
  // } else {
  //   return null;
  // }
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