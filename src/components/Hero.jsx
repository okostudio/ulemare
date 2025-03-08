import React from 'react';
import './Hero.scss';

const Hero = () => {
    return (
        <div className="hero">
            <div className="container">
                <div className="logo">
                    <h1>ULEMARE<img src="/images/logo.svg" alt="" /></h1>
                </div>
                <div className="hero-footer">
                    <h2>Fine sustainable handbags</h2>
                    <button>Pre-order now</button>
                </div>
            </div>
        </div>
    );
};

export default Hero;