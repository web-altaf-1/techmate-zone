import React from 'react';
import './Banner.css';

const Banner = () => {
  
    return (
        <div>
            <div className="banner">
                <div className="image">
                    <img src="https://i.ibb.co/qs74Pyk/computer-repair-shop-circuit-boards-and-computer-parts-EFR8-G8.png" alt="" />
                </div>
                <div className="details ">
                    <h1 className=''>The New Comfort Zone </h1>
                    <h1>Unveiling Soon.</h1>
                    <button className='get-started-btn'>Get Started</button>
                </div>

            </div>
        </div>
    );
};

export default Banner;