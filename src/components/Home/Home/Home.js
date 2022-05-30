import React from 'react';
import HomeProducts from '../../HomeProducts/HomeProducts';
import Qna from '../../Qna/Qna';
import Banner from '../Banner/Banner';

const Home = () => {
    

    return (
        <div>
            <Banner></Banner>
            <HomeProducts></HomeProducts>
            <Qna></Qna>
        </div>
    );
};

export default Home;