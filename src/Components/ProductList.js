import React from 'react';
import ProductItem from './Product-Item';
import products from './products';

const ProductList = () => {
    return (
        <div className="My-product">
         {products.map((product, index) => (
            <ProductItem myProduct={product}/>
         ))}
        </div>
      );
}
export default ProductList;
