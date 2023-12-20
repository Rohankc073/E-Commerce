// Navbar.js
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCartShopping, faLocationDot, faMagnifyingGlass, faPlus} from '@fortawesome/free-solid-svg-icons';
import React, {useState} from 'react';
import '../images/logo.png'
import CartPanel from "./cartPanle"; // Corrected import
import "../styles/cartPanel.css"
// import Login from "./Login";
// import "../styles/"
import { useNavigate } from 'react-router-dom';
import "../styles/navbar.css"


const Navbar1 = () => {
    const [showLogin, setShowLogin] = useState(false);

    const navigate = useNavigate();

    const handleSignInClick = () => {
        // Navigate to the login page
        navigate('/login');
    };
    const [isCartOpen, setIsCartOpen] = useState(false);

    const openCartPanel = () => {
        setIsCartOpen(true);
    };

    const closeCartPanel = () => {
        setIsCartOpen(false);
    };
    return (
        // <div className="nav">
        <div className="navbar1">
            <div className="nav-logo border1">
                <div className="logo">

                </div>
            </div>

            <div className="nav-address border">
                <p className="add-first">Delivery to</p>
                <div className="add-icon">
                    <FontAwesomeIcon icon={faLocationDot} />
                    <p className="add-second">KTM</p>
                </div>
            </div>


            <div className="nav-search">
                <select className="search-select">
                    <option>All</option>
                </select>

                <input
                    placeholder="Search Thrifty Techs"
                    className="search-input"
                />
                <div className="search-icon">
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </div>
            </div>



            <div className="nav-login">
                <button onClick={handleSignInClick}>Hello, Sign in</button>
                <p className="nav-second border">Account & Lists</p>
            </div>


            <div className="nav-return border">
                <p><span>Returns</span></p>
                <p className="nav-second border">& Order</p>
            </div>
            <div className="nav-cart border">
                <button className="cart-button" onClick={openCartPanel}>
                    <FontAwesomeIcon icon={faCartShopping} /> {/* Cart icon */}
                    Cart
                </button>
            </div>
            <CartPanel isOpen={isCartOpen} onOpen={openCartPanel} onClose={closeCartPanel} />
        </div>
        // </div>
    );
};

export default Navbar1;
