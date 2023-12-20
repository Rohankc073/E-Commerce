// Navbar.js
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faPlus } from '@fortawesome/free-solid-svg-icons';
import React, {useState} from 'react';
import '../images/logo.png'
import CartPanel from "./cartPanle"; // Corrected import
import "../styles/cartPanel.css"
// import "../styles/"

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
            <div className="nav-logo12 border1">
                <div className="logo">

                </div>
            </div>

            <div className="nav-address border">
                <p className="add-first">Delivery to</p>
                <div className="add-icon">
                    <i className="fa-solid fa-location-dot"></i>
                    <p className="add-second">KTM</p>
                </div>
            </div>

            <div className="nav-search2">
                <select className="search-select1">
                    <option>All</option>
                </select>

                <input
                    placeholder="Search Thrifty Techs"
                    className="search-input"
                />
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
                    <FontAwesomeIcon icon={faCartShopping} /> {/* Cart icon */}
                    Cart <FontAwesomeIcon icon={faPlus} /> {/* Plus symbol */}
                </button>
            </div>
            <CartPanel isOpen={isCartOpen} onOpen={openCartPanel} onClose={closeCartPanel} />
        </div>
    );
};

export default Navbar1;
