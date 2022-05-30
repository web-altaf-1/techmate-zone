import React from 'react';
import UseProducts from '../../hooks/UseProducts';
import './HomeProducts.css';
import HomeSingleProduct from './HomeSingleProduct';

const HomeProducts = () => {
    const [products, setProducts] = UseProducts();


    return (
        <div>
            <h2 className='text-center'>Our Products</h2>
            <div className='home-products'>
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