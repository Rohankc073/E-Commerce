import React from 'react';

const Product = () => {
    return (
        <>
            <header>
                <div className="navbar2">
                    <div className="nav-logo1 border">
                        <div className="logo1"></div>
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

                        <input
                            placeholder="Search Thrifty Techs"
                            className="search-input"
                        />
                        <div className="search-icon">
                            <i className="fa-solid fa-magnifying-glass"></i>
                        </div>
                    </div>

                    <div className="nav-signin border">
                        <p>
                            <span>Hello, Sign in</span>
                        </p>
                        <p className="nav-second border">Account & Lists</p>
                    </div>

                    <div className="nav-return border">
                        <p>
                            <span>Returns</span>
                        </p>
                        <p className="nav-second border">& Order</p>
                    </div>

                    <div className="nav-cart border">
                        <i className="fa-solid fa-cart-shopping"></i>
                        Cart
                    </div>
                </div>
                <div className="panel">
                    <div className="panel-all border">
                        <i className="fa-solid fa-bars"></i>
                        All
                    </div>
                    <div className="panel-ops border">
                        <p>Today's Deals</p>
                        <p>Customer Service</p>
                        <p>Registry</p>
                        <p>Gift Cards </p>
                        <p>Sell</p>
                    </div>
                    <div className="panel-deals border">
                        <p>Shop deals in Electronics</p>
                    </div>
                </div>
                <div className="apple">
                    <div className="apple-logo">

                    </div>
                    <p>Apple</p>
                    <video autoPlay loop muted playsInline>
                        <source src="apple.mp4" type="video/mp4" />
                        {/* Your browser does not support the video tag. */}
                    </video>
                </div>
            </header>


            <body>
            <div className="shop-section">
                {/* ... (your existing code for the shop section) */}
            </div>

            <div className="shop-section1">
                {/* ... (your existing code for the shop section1) */}
            </div>

            <footer>
                {/* ... (your existing code for the footer) */}
            </footer>
            </body>

        </>
    );
};

export default Product;
