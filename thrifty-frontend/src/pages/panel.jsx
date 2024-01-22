// Panel.js

import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/panel.css'
const Panel = () => {
    return (
        <div className="panel">
            <div className="panel-all border">
                <i className="fa-solid fa-bars"></i>
                All
            </div>
            <div className="panel-ops border">
                <p></p>
                <p>Customer Service</p>
                <p>
                    <Link to="/contactUs" className="transparent-button">
                        Contact Us
                    </Link>
                </p>
                <p>
                    <Link to="/aboutus" className="transparent-button">
                        About Us
                    </Link>
                </p>
                <p>Sell</p>
            </div>
            <div className="panel-deals border">
                <p>Shop deals in Electronics</p>
            </div>
        </div>
    );
};

export default Panel;
