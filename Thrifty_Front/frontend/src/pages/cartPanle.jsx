// CartPanel.js
import React, {useState} from 'react';

const CartPanel = ({ isOpen, onOpen, onClose }) => {
    const [isCartOpen, setIsCartOpen] = useState(false);

    const openCartPanel = () => {
        setIsCartOpen(true);
    };

    const closeCartPanel = () => {
        setIsCartOpen(false);
    };
    return (
        <div className={`cart-panel ${isOpen ? 'open' : ''}`}>
            {/* Actual cart information content goes here */}
            <div>
                <h2>Your Cart</h2>
                {/* Include your cart items or any other relevant content */}
            </div>
            <button onClick={onClose}>Close</button>
        </div>
    );
};

export default CartPanel;
