
import React from 'react';
import './ProductSection.scss';

const ProductSection = () => {
    return (
        <section className="products">
            <div className="container">
                <div className="intro">
                    <h2>Innovative Bags. High-Performance Materials. Precision Craftsmanship.</h2>
                    <p>A forward-thinking accessories brand redefining bag design with technical materials and expert craftsmanship.</p>
                </div>

                <div className="image-grid">
                    {/* Add a sample product */}
                    <div className="product">
                        <img src="/images/ulemare-bag-1.jpg" alt="Bag" />
                    </div>
                    <div className="product">
                        <img src="/images/ulemare-bag-2.jpg" alt="Bag" />
                    </div>
                    <div className="product">
                        <img src="/images/ulemare-bag-3.jpg" alt="Bag" />
                    </div>
                    {/* Repeat for more products */}
                </div>

                <div className="about">
                    <h2>About us</h2>
                    <p>Ulemare is a premium bag and accessories brand that blends cutting-edge technical fabrics with expert craftsmanship. Our designs prioritize durability, structure, and aesthetic appeal, ensuring that every bag is built to perform and last.</p>
                </div>

            </div>
        </section>
    );
};

export default ProductSection;
