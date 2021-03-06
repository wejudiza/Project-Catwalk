import React from 'react';

const Arrow = ({className, clickFunc, productsListLength, displayProductsListLength, lastProductId, lastDisplayProductId, firstProductId, firstDisplayProductId}) => {
  if (
    (productsListLength !== displayProductsListLength && (lastProductId !== lastDisplayProductId || firstProductId !== firstDisplayProductId))
  ) {
    // console.log('lastProductId', lastProductId);
    // console.log('lastDisplayProductId', lastDisplayProductId);
    // console.log('currentProductId', firstProductId);
    // console.log('firstDisplayProductId', firstDisplayProductId);
    return (
      <button className={className} onClick={clickFunc}></button>
    )
  } else {
    return (
      <button className={className} id='btnHidden' onClick={clickFunc}></button>
    )
  }
};

export default Arrow;