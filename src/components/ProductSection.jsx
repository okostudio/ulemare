
import React from 'react';
import './ProductSection.scss';

const ProductSection = () => {
    return (
        <section className="products">
            <div className="container">
                <div className="intro">
                    <h2>Endurance meets fashion</h2>
                    <p>At Ulemare, we appreciate that all life on earth is under threat of extinction. We’re using the resources we have—our business, our investments, our voice and our imaginations—to do something about it.</p>
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
            </div>
        </section>
    );
};

export default ProductSection;
