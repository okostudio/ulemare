import React from 'react';
import './Navbar.scss';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="container">
                <button aria-label="menu toggle" id="menu-icon-btn" aria-haspopup="dialog">
                    <svg class=" " width="24" height="24" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M20 6.5H4V5H20V6.5ZM20 11.25H4V12.75H20V11.25ZM20 17.5H4V19H20V17.5Z"></path>
                    </svg>
                    <span class="NavigationDrawer-styles__MenuText-sc-be9db841-0 iDlpDQ">MENU</span>
                </button>
                {/* <ul className="nav-links">
                    <li>Home</li>
                    <li>Shop</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul> */}
                {/* <div className="search">
                    <input type="text" placeholder="Search..." />
                </div> */}
            </div>
        </nav>
    );
};

export default Navbar;