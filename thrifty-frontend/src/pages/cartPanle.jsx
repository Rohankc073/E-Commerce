// CartPanel.js
import React, { useState } from 'react';

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
            {/* Your existing content */}
            <div>
                <h2>Your Cart</h2>
                {/* Include your cart items or any other relevant content */}
            </div>

            {/* Your added content */}
            <div className="center-wrapper">
                <div className="content">
                    <div className="center-wrapper">
                        <div className="content">
                            <nav>
                                <a href="#" className="menu">Menu</a>
                                <h1 className="logo">DiveShop</h1>
                                <div className="icons">
                                    <i className="fas fa-search"></i>
                                    <i className="fas fa-shopping-bag"></i><span style={{ marginLeft: '0.3rem' }}>1</span>
                                </div>
                            </nav>
                            <div className="top-bar">
                                <i className="fas fa-arrow-left"></i>
                                <span>Continue shopping</span>
                            </div>
                            <div className="bag">
                                <p className="bag-head"><span style={{ textTransform: 'uppercase' }}>Your Bag</span> - 1 item</p>
                            </div>
                            <div className="bag-product">
                                <div className="image">
                                    <img src="https://www.elenanelmes.com/images/test/ui/suunto_d4i_novo_sun_front_dive_metric.png" className="product-image" alt="Product" />
                                </div>
                                <div className="description">
                                    <p className="product-code small muted">Product code: SS022592000</p>
                                    <h1>Suunto D4i Novo</h1>
                                    <p>Sun</p>
                                    <p className="description-text">An easy-to-use dive computer with freedive mode and air integration.</p>
                                    <p style={{ marginBottom: '0.5rem' }}>One Size</p>
                                    <h2>$825.00</h2>
                                    <div className="quantity-wrapper">
                                        <div>
                                            <label htmlFor="quantity" style={{ marginRight: '0.5rem' }}>Quantity:</label>
                                            <select name="quantity" style={{ marginBottom: '1rem' }}>
                                                <option value="" disabled>Please select</option>
                                                <option value="1" selected>1</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                            </select>
                                        </div>
                                        <button className="btn-remove">Remove</button>
                                    </div>
                                </div>
                            </div>
                            <div className="bag-total">
                                <div className="subtotal">
                                    <p className="small">Subtotal:</p>
                                    <p className="small">$825.00</p>
                                </div>
                                <div className="delivery">
                                    <p className="small">Delivery (Standard - 2 working days):<br />
                                        <span className="change-delivery">Change delivery method</span></p>
                                    <p className="small">Free</p>
                                </div>
                                <div className="total">
                                    <h3>Total:</h3>
                                    <h3>$825.00</h3>
                                </div>
                                <div className="promo-checkbox">
                                    <input type="checkbox" name="promo-check" defaultChecked />
                                    <label htmlFor="promo-check">I have a promo code</label>
                                </div>
                                <div className="promo-code">
                                    <input type="text" name="promo-checkbox" placeholder="Enter your promo code here" defaultChecked />
                                    <button className="apply">Apply</button>
                                </div>
                                <button className="btn-go-checkout">
                                    <i className="fas fa-lock"></i>
                                    <span>Go to Checkout</span>
                                </button>
                            </div>
                            <div className="help">
                                <p>Need help? Call free 01234 567 890</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <button onClick={onClose}>Close</button>
        </div>
    );
};

export default CartPanel;
