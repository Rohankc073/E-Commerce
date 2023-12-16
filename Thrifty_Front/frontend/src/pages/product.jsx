import React from 'react';

const Product = () => {
    return (
        <>
            <div>
                <header>
                    <div className="navbar1">
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

                        <div className="nav-search2">
                            <select className="search-select1">
                                <option>All</option>
                            </select>

                            <div className="search-icon">
                                <i className="fa-solid fa-magnifying-glass"></i>
                            </div>

                            <input placeholder="Search Thrifty Techs" className="search-input" />
                        </div>

                        <div className="nav-signin border1">
                            <p><span>Hello, Sign in</span></p>
                            <p className="nav-second border1">Account & Lists</p>
                        </div>

                        <div className="nav-return border1">
                            <p><span>Returns</span></p>
                            <p className="nav-second border1">& Order</p>
                        </div>

                        <div className="nav-cart border1">
                            <i className="fa-solid fa-cart-shopping"></i>
                            Cart
                        </div>
                    </div>
                    <div className="panel1">
                        {/* Panel content goes here */}
                    </div>
                    <div className="apple1">
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
        </>
    );
}

export default Product;
