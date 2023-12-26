import React, { useState } from 'react';
import logo23 from '../images/logo.png';
import product1 from "../images/ip13Blue.jpg";

const CartPanel = ({ isOpen, onClose }) => {
    const [isCartOpen, setIsCartOpen] = useState(false);

    const openCartPanel = () => setIsCartOpen(true);
    const closeCartPanel = () => setIsCartOpen(false);

    return (
        <div className={`custom-cart-panel ${isOpen ? 'custom-open' : ''}`}>
            <div>
                <div className="logo">
                </div>
                <h2>Your Custom Cart</h2>
            </div>

            <div className="custom-center-wrapper">
                <div className="custom-content">


                    {/* Other content or components related to your logo */}

                    <div className="custom-bag-product">
                        <div className="custom-image">
                            <img src={product1} alt="Product" />
                        </div>
                        {/* Other product-related content */}
                    </div>
                </div>
            </div>
                    <div className="shoping">
                        <button type="button">Continue Shopping</button>
                    </div>
                {/*<div className="custom-content">*/}




                {/*    <div className="custom-top-bar">*/}
                {/*        <i className="fas fa-arrow-left"></i>*/}
                {/*        <span>Continue shopping</span>*/}
                {/*    </div>*/}

                {/*    <div className="custom-bag">*/}
                {/*        <p className="custom-bag-head">*/}
                {/*            <span style={{ textTransform: 'uppercase' }}>Your Custom Bag</span> - 1 item*/}
                {/*        </p>*/}
                {/*    </div>*/}

                {/*    <div className="custom-bag-product">*/}
                {/*        <div className="custom-image">*/}
                {/*            <img src="https://www.elenanelmes.com/images/test/ui/suunto_d4i_novo_sun_front_dive_metric.png" className="custom-product-image" alt="Product" />*/}
                {/*        </div>*/}

                {/*        <div className="custom-description">*/}
                {/*            <p className="custom-product-code small muted">Product code: SS022592000</p>*/}
                {/*            <h1>Suunto D4i Novo</h1>*/}
                {/*            <p>Sun</p>*/}
                {/*            <p className="custom-description-text">An easy-to-use dive computer with freedive mode and air integration.</p>*/}
                {/*            <p style={{ marginBottom: '0.5rem' }}>One Size</p>*/}
                {/*            <h2>$825.00</h2>*/}

                {/*            <div className="custom-quantity-wrapper">*/}
                {/*                <label htmlFor="custom-quantity" style={{ marginRight: '0.5rem' }}>Quantity:</label>*/}
                {/*                <select name="custom-quantity" style={{ marginBottom: '1rem' }}>*/}
                {/*                    <option value="" disabled>Please select</option>*/}
                {/*                    <option value="1" selected>1</option>*/}
                {/*                    <option value="2">2</option>*/}
                {/*                    <option value="3">3</option>*/}
                {/*                </select>*/}
                {/*                <button className="custom-btn-remove">Remove</button>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*    </div>*/}

                {/*    <div className="custom-bag-total">*/}
                {/*        <div className="custom-subtotal">*/}
                {/*            <p className="custom-small">Subtotal:</p>*/}
                {/*            <p className="custom-small">$825.00</p>*/}
                {/*        </div>*/}

                {/*        <div className="custom-delivery">*/}
                {/*            <p className="custom-small">Delivery (Standard - 2 working days):<br />*/}
                {/*                <span className="custom-change-delivery">Change delivery method</span></p>*/}
                {/*            <p className="custom-small">Free</p>*/}
                {/*        </div>*/}

                {/*        <div className="custom-total">*/}
                {/*            <h3>Total:</h3>*/}
                {/*            <h3>$825.00</h3>*/}
                {/*        </div>*/}

                {/*        <div className="custom-promo-checkbox">*/}
                {/*            <input type="checkbox" name="custom-promo-check" defaultChecked />*/}
                {/*            <label htmlFor="custom-promo-check">I have a promo code</label>*/}
                {/*        </div>*/}

                {/*        <div className="custom-promo-code">*/}
                {/*            <input type="text" name="custom-promo-checkbox" placeholder="Enter your promo code here" defaultChecked />*/}
                {/*            <button className="custom-apply">Apply</button>*/}
                {/*        </div>*/}

                {/*        <button className="custom-btn-go-checkout">*/}
                {/*            <i className="fas fa-lock"></i>*/}
                {/*            <span>Go to Checkout</span>*/}
                {/*        </button>*/}
                {/*    </div>*/}

                {/*    <div className="custom-help">*/}
                {/*        <p>Need help? Call free 01234 567 890</p>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}

            <button onClick={onClose}>Close</button>
        {/*</div>*/}
        {/*</div>*/}
        </div>

    );
};


export default CartPanel;
