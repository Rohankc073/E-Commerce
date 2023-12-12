// src/components/ViewComponent.tsx
import './assets/logo.png'
import './assets/Apple.jpg'
const ViewComponent: React.FC = () => {

    return (
        <>
            <header>
                <div className="navbar">
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

                    <div className="nav-search">
                        <select className="search-select">
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
            </header>
            <body>
            <div className="shop-section">
                <div className="small-box-container">
                    <div className="small-box">
                        {/* Content for the first small box goes here */}
                    </div>
                    <div className="small-box1">
                        {/* Content for the second small box goes here */}
                    </div>
                </div>
                <div className="box1 box">
                    <div className="box-content">
                        <div
                            className="box-image"
                        ></div>
                    </div>
                </div>

                <div className="product-description">
                    <h2>Apple iPhone 13 (256GB) 5G - Pink</h2>
                    <div className="condition">
                        <span>Condition:</span> Pre-Loved | Top
                    </div>
                    <div className="pricingBox">
                        <div className="salePrice">
                            <span className="currency">NRP 1,40,000 </span>
                            <div className="colour">
                                <span className="colour">Color : Pink</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </body>
            <footer>
                <div className="foot-panel1">Back to Top</div>
                <div className="foot-panel2">
                    <ul>
                        <p>Get to Know Us </p>
                        <a>Careers</a>
                        <a>Blog</a>
                        <a>Thrifty Relations </a>
                        <a>Thrifty Devices</a>
                        <a>Thrifty Science </a>
                    </ul>

                    <ul>
                        <p>Get to Know Us </p>
                        <a>Careers</a>
                        <a>Blog</a>
                        <a>Thrifty Relations </a>
                        <a>Thrifty Devices</a>
                        <a>Thrifty Science </a>
                    </ul>

                    <ul>
                        <p>Get to Know Us </p>
                        <a>Careers</a>
                        <a>Blog</a>
                        <a>Thrifty Relations </a>
                        <a>Thrifty Devices</a>
                        <a>Thrifty Science </a>
                    </ul>

                    <ul>
                        <p>Get to Know Us </p>
                        <a>Careers</a>
                        <a>Blog</a>
                        <a>Thrifty Relations </a>
                        <a>Thrifty Devices</a>
                        <a>Thrifty Science </a>
                    </ul>
                </div>

                <div className="foot-panel3">
                    <div className="logo"></div>
                </div>

                <div className="foot-panel4">
                    <div className="pages">
                        <a>Conditions of Use</a>
                        <a>Privacy Notice</a>
                        <a>Your Ads Privacy Choices</a>
                    </div>
                    <div className="copyright">
                        ©1996-2023, Amazon.com, Inc. or its affiliates
                    </div>
                </div>
            </footer>
        </>
    );
};

export default ViewComponent;
