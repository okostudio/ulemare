
import React from 'react';
import './Footer.scss';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <p>&copy; 2025 ULEMARE PTY Ltd.</p>
                    <div className="social-links">
                        <a href="#">Instagram</a>
                        <a href="#">Facebook</a>
                        <a href="#">Twitter</a>
                    </div>
                </div>
                <div className="logo">
                    <img src="/images/logo.svg" alt="" className="logo" />
                </div>
            </div>
        </footer>
    );
};

export default Footer;
