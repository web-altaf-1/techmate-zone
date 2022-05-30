import React, { useEffect, useState } from 'react';
import UseProducts from '../../hooks/UseProducts';
import Product from '../Product.js/Product';
import Loading from '../Shared/Loading/Loading';
import './Products.css';

const Products = () => {
    const [products,setProducts,isLoading] = UseProducts();
    const a = '2';
    return (
        <div className=''>
            <h2 className='text-center pt-5'>All Products </h2>
            {
                isLoading? <div>
                {<Loading></Loading>}
    
                </div> : <div className='products-container p-5'>
                {
                    products.map(product => <Product
                        key={product._id}
                        product={product}
                    ></Product>)

                }
            </div>
            }
            
            
        </div>
    );
};

export default Products;