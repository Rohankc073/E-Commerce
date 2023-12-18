// CartPanel.js
import React from 'react';

const CartPanel = ({ isOpen, onClose }) => {
    return (
        <div className={`cart-panel ${isOpen ? 'open' : ''}`}>
            {/* Cart panel content goes here */}
            <button onClick={onClose}>Close</button>
        </div>
    );
};

export default CartPanel;
