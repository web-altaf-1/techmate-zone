import React, { useEffect, useState } from 'react';

const UseProducts = (reload,reloadModal) => {
    const [products, setProducts] = useState([]);
    const [isLoading,isSetLoading] = useState(false);


    useEffect(() => {
        isSetLoading(true)
        fetch('parts.json')
            .then(res => res.json())
            .then(data => {
                setProducts(data);
                isSetLoading(false)
            })
    }, [reload,reloadModal])



    return [products,setProducts,isLoading]
};

export default UseProducts;