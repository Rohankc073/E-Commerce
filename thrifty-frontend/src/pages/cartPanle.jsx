import React, { useState } from 'react';

import product1 from "../images/ip13Blue.jpg";

const CartPanel = ({ isOpen, onClose }) => {
    const [isCartOpen, setIsCartOpen] = useState(false);

    const openCartPanel = () => setIsCartOpen(true);
    const closeCartPanel = () => setIsCartOpen(false);

    return (
        <div className={`container14 ${isOpen ? 'custom-open' : ''}`}>



            <button onClick={onClose}>Close</button>
        {/*</div>*/}
        {/*</div>*/}
        </div>

    );
};


export default CartPanel;
