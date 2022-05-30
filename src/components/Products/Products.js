import React, { useEffect, useState } from 'react';
import UseProducts from '../../hooks/UseProducts';
import Product from '../Product.js/Product';
import './Products.css';

const Products = () => {
    const [products,setProducts] = UseProducts();
    return (
        <div className=''>
            <h2 className='text-center pt-5'>All Products </h2>
            <div className='products-container p-5'>
                {
                    products.map(product => <Product
                        key={product._id}
                        product={product}
                    ></Product>)
                }
            </div>
        </div>
    );
};

export default Products;