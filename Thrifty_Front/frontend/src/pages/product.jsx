import React from 'react';

const Product = () => {
    return (
        <div>
            <header>
                <div className="navbar">
                    <div className="nav-logo1 border">
                        <div className="logo1">
                        </div>
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

                        <input placeholder="Search Thrifty Techs" className="search-input">
                            <div className="search-icon">
                                <i className="fa-solid fa-magnifying-glass"></i>
                                <input/>
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
                        <i className="fa-solid fa-cart-shopping"></i>
                        Cart
                    </div>
                </div>
                <div className="panel">
                    {/* Panel content goes here */}
                </div>
                <div className="apple">
                    {/* Apple section content goes here */}
                </div>
            </header>

            <div className="shop-section">
                {/* Shop section content goes here */}
            </div>

            <div className="shop-section1">
                {/* Shop section 1 content goes here */}
            </div>

            <footer>
                <div className="foot-panel1">
                    Back to Top
                </div>
                <div className="foot-panel2">
                    {/* Footer panel 2 content goes here */}
                </div>
                <div className="foot-panel3">
                    <div className="logo"></div>
                </div>
                <div className="foot-panel4">
                    {/* Footer panel 4 content goes here */}
                </div>
            </footer>
        </div>
        );
}

export default Product;
