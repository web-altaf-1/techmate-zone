import React from 'react';
import UseProducts from '../../hooks/UseProducts';
import './HomeProducts.css';
import HomeSingleProduct from './HomeSingleProduct';

const HomeProducts = () => {
    const [products, setProducts] = UseProducts();


    return (
        <div>
            <h2 className='text-center py-3 my-2 fw-bold'>Our Products</h2>
            <div className='home-products mx-3 mb-3 rounded-3'>
                {
                    products.slice(0,6).map((product,index) => <HomeSingleProduct
                        key={index}
                        product={product}
                    ></HomeSingleProduct> )
                }
            </div>
        </div>
    );
};

export default HomeProducts;