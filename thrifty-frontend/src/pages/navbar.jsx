import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faLocationDot, faMagnifyingGlass, faUser } from '@fortawesome/free-solid-svg-icons';
import React, { useEffect, useState } from 'react';
import CartPanel from '../pages/cartPanle'; // Corrected import
import { Link, useNavigate } from 'react-router-dom';
import { collection, query, where, getDocs } from 'firebase/firestore';

import '../styles/cartPanel.css';
import '../styles/navbar.css';
import {db, firestore} from '../Firebase/firebase';



const Navbar1 = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    const navigate = useNavigate();

    const handleSignInClick = () => {
        navigate('/login');
    };

    const [isCartOpen, setIsCartOpen] = useState(false);


    const openCartPanel = () => {
        setIsCartOpen(true);
    };

    const closeCartPanel = () => {
        setIsCartOpen(false);
    };

    const handleSearch = async () => {
        console.log('Searching...');
        try {
            console.log('Searching for:', searchTerm);
            const productsCollection = collection(db, 'products');
            const q = query(productsCollection, where('brand', '==', searchTerm));
            const querySnapshot = await getDocs(q);
            const productsData = querySnapshot.docs.map((doc) => ({
                ...doc.data(),
                uid: doc.id, // Add this line to include the document ID as 'uid'
            }));

            console.log('Search results:', productsData);
            setSearchResults(productsData);
            // Comment out the following line to prevent navigation
            navigate(`/searchP?searchTerm=${searchTerm}`, { state: { searchResults: productsData } });
        } catch (error) {
            console.error('Error searching for products:', error);
        }
    };


    return (
        <div className="navbar1">
            <Link to="/home" className="nav-logo border1">
                <div className="logo12"></div>
            </Link>

            <div className="nav-address border">
                <p className="add-first">Delivery To</p>
                <div className="add-icon">
                    <FontAwesomeIcon icon={faLocationDot}/>
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
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Search Thrifty Techs"
                    className="search-input"
                />
                <div className="search-icon" onClick={handleSearch}>
                    <FontAwesomeIcon icon={faMagnifyingGlass}/>
                </div>

                {/*{searchResults.map((product) => (*/}
                {/*    <Link key={product.id} to={`/product/${product.id}`} className="search-result">*/}
                {/*        /!* Display information about the product *!/*/}
                {/*        <h3>{product.productName}</h3>*/}
                {/*        <p>{product.name}</p>*/}
                {/*        <p>{product.description}</p>*/}
                {/*        <p>Price: NRP {product.price}</p>*/}
                {/*    </Link>*/}
                {/*))}*/}
            </div>

            <div className="nav-login">
                <button onClick={handleSignInClick}>Hello, Sign in</button>
                <FontAwesomeIcon icon={faUser} style={{marginLeft: '15px'}}/>
                <Link to="/accounts">
                    <button>Accounts</button>
                </Link>
            </div>

            <div className="nav-cart border">
                <button className="cart-button" onClick={openCartPanel} style={{cursor: 'pointer'}}>
                    <FontAwesomeIcon icon={faCartShopping}/> Cart
                    <span className="cart-icon-css">0</span>
                </button>
            </div>
            <CartPanel isOpen={isCartOpen} onOpen={openCartPanel} onClose={closeCartPanel}/>
        </div>
    );
};

export default Navbar1;
