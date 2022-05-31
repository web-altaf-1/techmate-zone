import React, { useEffect, useState } from 'react';
import Loading from '../components/Shared/Loading/Loading';

const UseProducts = (reload, reloadModal) => {
    const [products, setProducts] = useState([]);
    const [isLoading, isSetLoading] = useState(false);


    useEffect(() => {
        isSetLoading(true)
        fetch('https://agile-oasis-94164.herokuapp.com/products')
            .then(res => res.json())
            .then(data => {
                setProducts(data);
                isSetLoading(false)
            })
    }, [reload, reloadModal])

    
        
    return [products, setProducts, isLoading]
    
};

export default UseProducts;