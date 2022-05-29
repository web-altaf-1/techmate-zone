import React, { useEffect, useState } from 'react';
import Product from '../Product.js/Product';
import './Products.css';

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('parts.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
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