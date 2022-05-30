import React, { useEffect, useState } from 'react';
import Loading from '../components/Shared/Loading/Loading';

const UseProducts = (reload, reloadModal) => {
    const [products, setProducts] = useState([]);
    const [isLoading, isSetLoading] = useState(false);


    useEffect(() => {
        isSetLoading(true)
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => {
                setProducts(data);
                isSetLoading(false)
            })
    }, [reload, reloadModal])

    
        
    return [products, setProducts, isLoading]
    
};

export default UseProducts;