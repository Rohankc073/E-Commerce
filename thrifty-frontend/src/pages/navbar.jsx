// Navbar.js
import React, {useState} from 'react';
import '../../../Thrifty_Front/frontend/src/css/navbar.css'; // Import your CSS file for styling
import CartPanel from "./cartPanle"; // Corrected import
import "../../../Thrifty_Front/frontend/src/images/logo.png"

const Navbar1 = () => {
    const [isCartOpen, setIsCartOpen] = useState(false);

    const openCartPanel = () => {
        setIsCartOpen(true);
    };

    const closeCartPanel = () => {
        setIsCartOpen(false);
    };
    return (
        <div className="navbar1">
            <div className="nav-logo1 border">
                <div className="logo1"></div>
            </div>

            <div className="nav-address border">
                <p className="add-first">Delivery to</p>
                <div className="add-icon">
                    <i className="fa-solid fa-location-dot"></i>
                    <p className="add-second">KTM</p>
                </div>
            </div>

            <div className="nav-search">
                <select className="search-select">
                    <option>All</option>
                </select>

                <input placeholder="Search Thrifty Techs" className="search-input" />
                <div className="search-icon">
                    <i className="fa-solid fa-magnifying-glass"></i>
                </div>
            </div>

            <div className="nav-signin border">
                <p><span>Hello, Sign in</span></p>
                <p className="nav-second border">Account & Lists</p>
            </div>

            <div className="nav-return border">
                <p><span>Returns</span></p>
                <p className="nav-second border">& Order</p>
            </div>

            <div className="nav-cart border">
                <button className="cart-button" onClick={openCartPanel}>
                    <i className="fa-solid fa-cart-shopping"></i>
                    Open Cart
                </button>
            </div>
            <CartPanel isOpen={isCartOpen} onOpen={openCartPanel} onClose={closeCartPanel} />
        </div>
    );
};

export default Navbar1;
