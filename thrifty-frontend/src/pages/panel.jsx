// Panel.js

import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/panel.css'
const Panel = () => {
    return (
        <div className="panel">
        
            <div className="panel-ops border">
                <Link to="/product?type=laptop" className="transparent-button">
                    Laptop
                </Link>
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

            </div>
            <div className="panel-deals border">
                <p>Shop deals in Electronics</p>
            </div>
        </div>
    );
};

export default Panel;
