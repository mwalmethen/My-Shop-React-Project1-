import React from 'react'

 const ProductItem = (props) => {
  return (
    <div>
  <img className="cookie-image" src={props.myProduct.image} alt="cookies-image"/>
  <p className="description-product1">{props.myProduct.name} </p>
  <p className="description-product2"> {`${props.myProduct.price} KD`} </p>
    </div>
  );
};
export default ProductItem; 