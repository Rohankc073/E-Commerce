import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faLocationDot, faMagnifyingGlass, faUser } from '@fortawesome/free-solid-svg-icons';
import React, { useEffect, useState } from 'react';
import CartPanel from '../pages/cartPanle'; // Corrected import
import { Link, useNavigate } from 'react-router-dom';

import '../styles/cartPanel.css';
import '../styles/navbar.css';
import {db, firestore} from '../Firebase/firebase';
import {doc} from "firebase/firestore";


const Navbar1 = () => {
    const navigate = useNavigate();

    const handleSignInClick = () => {
        navigate('/login');
    };

    const [isCartOpen, setIsCartOpen] = useState(false);
    const [searchInput, setSearchInput] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    const openCartPanel = () => {
        setIsCartOpen(true);
    };

    const closeCartPanel = () => {
        setIsCartOpen(false);
    };

    const fetchSearchResults = async () => {
        try {
            console.log('Search Input:', searchInput);
            const productsRef = firestore.collection(db, 'products');

            const snapshot = await productsRef
                .where('brand', '>=', searchInput.toLowerCase())
                .where('brand', '<=', searchInput.toLowerCase() + '\uf8ff')
                .get();

            console.log('Query Snapshot:', snapshot.docs.map(doc => doc.data()));

            // Navigate to the "/product" page with the search results as a query parameter
            // navigate('/product', { searchResults: results });
        } catch (error) {
            console.error('Error fetching search results:', error);
        }
    };

    useEffect(() => {
        // Fetch data only if there is a search input
        if (searchInput.trim() !== '') {
            fetchSearchResults();
        } else {
            setSearchResults([]);
        }
    }, [searchInput]);

    return (
        <div className="navbar1">
            <div className="nav-logo border1">
                <div className="logo12"></div>
            </div>

            <div className="nav-address border">
                <p className="add-first">Delivery to</p>
                <div className="add-icon">
                    <FontAwesomeIcon icon={faLocationDot} />
                    <p className="add-second">KTM</p>
                </div>
            </div>

            <div className="nav-search12">
                <select className="search-select12">
                    <option value="all">All</option>
                    <option value="option1">Mobile Phone</option>
                    <option value="option2">Laptop</option>
                    <option value="option2">Tablet</option>
                    <option value="option2">Smart Watches</option>
                </select>

                <input
                    placeholder="Search Thrifty Techs"
                    className="search-input"
                    value={searchInput}
                    onChange={(e) => setSearchInput(e.target.value)}
                />

                <Link to="/product">
                    <div className="search-icon" onClick={fetchSearchResults}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </div>
                </Link>

                {searchResults.length > 0 && (
                    <div className="search-results">
                        <p>Search Results:</p>
                        <ul>
                            {searchResults.map((result, index) => (
                                <li key={index}>{result.productName}</li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>

            <div className="nav-login">
                <button onClick={handleSignInClick}>Hello, Sign in</button>
                <FontAwesomeIcon icon={faUser} style={{ marginLeft: '15px' }} />
                <Link to="/accounts">
                    <button>Accounts</button>
                </Link>
            </div>

            <div className="nav-cart border">
                <button className="cart-button" onClick={openCartPanel} style={{ cursor: 'pointer' }}>
                    <FontAwesomeIcon icon={faCartShopping} /> Cart
                    <span className="cart-icon-css">0</span>
                </button>
            </div>
            <CartPanel isOpen={isCartOpen} onOpen={openCartPanel} onClose={closeCartPanel} />
        </div>
    );
};

export default Navbar1;
